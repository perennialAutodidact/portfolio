import { NextApiHandler } from "next";
import type { IcsEvent } from "ts-ics";
import { parseIcsCalendar } from "@ts-ics/schema-zod";
import { promises } from "fs";
import { google, calendar_v3 } from "googleapis";
import { auth, EnrichedSession } from "~/auth";
import { oauth2Client } from "@/app/api/auth/oauth2Client";
import { EventReminder } from "@/app/tools/calendar/store";

export const POST = async (request: Request) => {
  const formData = await request.formData();
  const files = formData.get("files") as File;
  const reminders = JSON.parse(formData.get("reminders") as string);
  const buffer = await files.arrayBuffer();
  const icsString = new TextDecoder().decode(buffer);
  const session = (await auth()) as EnrichedSession;
  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  const ics = parseIcsCalendar(icsString);
  if (!ics.events) return new Response();
  const event = ics.events[0];

  const { accessToken, refreshToken } = session;

  oauth2Client.setCredentials({
    access_token: accessToken,
    refresh_token: refreshToken,
  });

  const calendar = google.calendar({
    version: "v3",
    auth: oauth2Client,
  });

  const eventReminders: calendar_v3.Schema$EventReminder[] = (
    reminders || []
  ).map((reminder: EventReminder) => ({
    method: "email",
    minutes: reminder.minutes,
  }));

  const googleEvent: calendar_v3.Schema$Event = {
    summary: event.summary,
    description: event.description,
    location: event.location,
    start: {
      dateTime: event.start.date.toISOString(),
      timeZone: event.start.local?.timezone,
    },
    end: {
      dateTime: (event.end || event.start).date.toISOString(),
      timeZone: event.end?.local?.timezone,
    },
    reminders: {
      useDefault: false,
      overrides: eventReminders,
    },
  };

  try {
    const calendarRes = await calendar.events.insert({
      calendarId: "primary",
      requestBody: googleEvent,
    });
    return Response.json(
      { message: "event created", googleEvent },
      { statusText: calendarRes.statusText, status: calendarRes.status },
    );
  } catch (error: any) {
    return Response.json(
      {},
      { statusText: error.statusText, status: error.status },
    );
  }
};
