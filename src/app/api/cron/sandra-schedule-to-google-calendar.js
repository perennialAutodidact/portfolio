import path from 'path';
import PdfSmartParser from 'pdf-parse-new/lib/SmartPDFParser.js';
import 'dotenv/config';
import { google } from 'googleapis';
import iteratorZip from 'es-iterator-helpers/Iterator.zip';
import { DateTime } from 'luxon'
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';
const emailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USERNAME_GOOD_FAMILY,
    pass: process.env.GMAIL_PASSWORD_GOOD_FAMILY,
  },
})

const scopes = [
  'https://www.googleapis.com/auth/drive',
  'https://www.googleapis.com/auth/calendar',
];

const keyfilePath = path.join(process.cwd(), 'credentials.json');

// subject to change. should be the same as the filename of the schedule PDF in Google Drive
const scheduleFilename = 'SELLWOOD\ SCHEDULE.pdf';

async function parseRawScheduleText(rawScheduleText) {
  const lines = rawScheduleText.split('\n')
  const closingTime = '3:00pm';
  const findLineStartingWithPrefix = (prefix) => lines
    .filter(line => line.toLowerCase().startsWith(prefix.toLowerCase()))
    .map(line => line.toLowerCase());

  const removePrefixesAndSplit = (lines) => lines.map(line => line.split(' ').slice(1));

  const [dates, times] = ['employee', 'sandy']
    .map(findLineStartingWithPrefix)
    .map(removePrefixesAndSplit)

  let earliestDate = null;
  const schedule = iteratorZip([dates, times])
    .reduce((dateTimePairs, [scheduleDates, scheduleTimes]) => {
      const scheduleItems = iteratorZip([scheduleDates, scheduleTimes]).toArray()
      return [...dateTimePairs, ...scheduleItems];
    }, [])
    .reduce((schedule, [date, time]) => {
      let scheduleItem = {
        startTime: null,
        endTime: null,
      };
      if (time === 'off') {
        scheduleItem.note = 'scheduled off';
      } else if (time === 'ro') {
        scheduleItem.note = 'requested off';
      } else {
        if (!earliestDate) earliestDate = DateTime.fromFormat(date, 'M/d');
        let [startTime, endTime] = time.split('-');
        let note = '';

        if (!startTime.includes(':')) startTime = startTime.replace(/(\d)(am|pm)/i, '$1:00$2');
        startTime = DateTime.fromFormat(`${date} ${startTime}`, 'M/d h:mma');
        if (endTime === 'close') {
          endTime = closingTime;
          note = 'until close';

        } else if (endTime === 'x') {
          endTime = '1:00pm';
          note = 'until cut';
        }

        if (!endTime.includes(':')) endTime = endTime.replace(/(\d)(am|pm)/i, '$1:00$2');
        endTime = DateTime.fromFormat(`${date} ${endTime}`, 'M/d h:mma')
        // because no year is provided, Luxon will default to the current year
        // if the schedule wraps into the next year, add a year to the end time
        if (endTime < startTime) {
          endTime.set({ year: endTime.year + 1 });
        }

        scheduleItem = {
          startTime,
          endTime,
          note,
        }
      }
      return [...schedule, scheduleItem];
    }, [])

  return schedule;
}

async function eventExists(calendar, startTime, endTime) {
  const response = await calendar.events.list({
    calendarId: 'primary',
    timeMin: startTime.toISO(),
    timeMax: endTime.toISO(),
    singleEvents: true,
    q: 'Sandra works',
  })
  return response?.data?.items?.length > 0;
}

async function createEvent(calendar, { startTime, endTime, note }) {
  const timeZone = 'America/Los_Angeles';
  const requestBody = {
    summary: `Sandra works ${note}`,
    start: {
      timeZone,
      dateTime: startTime.toISO(),
    },
    end: {
      timeZone,
      dateTime: endTime.toISO(),
    }
  }
  await calendar.events.insert({
    calendarId: 'primary',
    requestBody,
  })
}

async function fetchSchedulePdfFromDrive(drive) {
  const result = await drive.files.list({
    q: `name=${scheduleFilename}`,
    spaces: 'drive',
    fields: 'files(id, name)',
  });
  const { files } = result.data;
  if (!files || files.length === 0) {
    console.log('No files found.');
    return;
  }

  const response = await drive.files.get({
    fileId: files[0].id,
    alt: 'media',
  }, { responseType: 'arraybuffer' })

  const parser = new PdfSmartParser()
  const parsed = await parser.parse(response.data)
  return parsed;
}

async function uploadScheduleToCalendar(calendar, schedule, auth) {
  for (const { startTime, endTime, note } of schedule) {
    if (!startTime) continue;

    try {

      const exists = await eventExists(calendar, startTime, endTime);
      if (exists) {
        console.info(`Event already exists on ${startTime.toLocaleString({ weekday: 'short', month: 'long', day: 'numeric' })} for "Sandra works ${note}" from ${startTime.toLocaleString(DateTime.TIME_SIMPLE)} to ${endTime.toLocaleString(DateTime.TIME_SIMPLE)}`)
      } else {
        createEvent(calendar, { startTime, endTime, note });
      }
    } catch (error) {
      console.error(`Failed to process schedule item for ${startTime.toFormat('M/d')}`, error.message);
    }
  }
}

const sendEmail = async ({ subject, html }) => {
  await emailTransporter.sendMail({
    from: process.env.GMAIL_USERNAME_GOOD_FAMILY,
    to: process.env.GMAIL_PASSWORD_GOOD_FAMILY,
    subject,
    html,
  })
};

export async function GET() {
  try {
    const auth = await new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID_GOOD_FAMILY,
      process.env.GOOGLE_CLIENT_SECRET_GOOD_FAMILY,
      process.env.GOOGLE_REDIRECT_URI_GOOD_FAMILY,
      scopes,
    )

    auth.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN_GOOD_FAMILY,
    })

    const drive = google.drive({ version: 'v3', auth });
    const calendar = google.calendar({ version: 'v3', auth });

    const schedulePdf = await fetchSchedulePdfFromDrive(drive);
    const schedule = await parseRawScheduleText(schedulePdf.text);
    await uploadScheduleToCalendar(calendar, schedule, auth);
    const subject = 'Vercel Cron Job Succeeded - Upload Sandra\'s Work Schedule to Google Calendar';
    const html = `
      <h3>Vercel Cron Job Succeeded - Upload Sandra's Work Schedule to Google Calendar</h3>
      <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
    `;

    await sendEmail({ subject, html });
    return Response.json({ success: true, message: 'Successfully uploaded schedule to Google Calendar', status: 200 });
  } catch (error) {
    // Send an email to yourself if the cron job throws an error
    const errorMessage = error instanceof Error ? error.message : String(error);
    const errorStack = error instanceof Error ? error.stack : 'No stack trace available';
    const subject = 'Vercel Cron Job Failed - Upload Sandra\'s Schedul to Google Calendar';

    const html = `
      <h3>Vercel Cron Job Failed - Upload Sandra's Work Schedule to Google Calendar</h3>
      <p><strong>Error Message:</strong> ${errorMessage}</p>
      <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
      <pre><strong>Stack Trace:</strong>\n${errorStack}</pre>
    `;

    await sendEmail({ subject, html });
    return Response.json({ error: errorMessage, status: 500 });
  }
}


