import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { produce } from "immer";
import { devtools } from "zustand/middleware";

export type EventReminder = {
  label: string;
  checked: boolean;
  minutes: number;
  id: number;
};

type CalendarState = {
  reminders: EventReminder[];
  files: File[];
  messages: {
    success?: string;
    error?: string;
  };
  setStatusMessage: (status: "success" | "error", message: string) => void;
  addFile: (files: File[]) => void;
  addReminder: (reminder: EventReminder) => void;
  deleteReminder: (id: number) => void;
};

export const useCalendarStore = create<CalendarState>()(
  devtools(
    immer((set) => ({
      files: [],
      addFile: (files: File[]) =>
        set(
          (state) => ({
            files: state.files.concat(files),
          }),
          false,
          "addFile",
        ),
      reminders: [
        { id: 1, label: "10 minutes", minutes: 10, checked: true },
        { id: 2, label: "1 hour", minutes: 60, checked: true },
        { id: 3, label: "1 day", minutes: 60 * 24, checked: true },
      ],
      messages: {
        success: "",
        error: "",
      },
      setStatusMessage: (status: "success" | "error", message: string) =>
        set((state) => {
          state.messages[status] = message;
        }),
      addReminder: (reminder: EventReminder) =>
        set(
          (state) => {
            state.reminders = state.reminders.concat(reminder);
          },
          false,
          "addReminder",
        ),
      deleteReminder: (id: number) =>
        set(
          (state) => {
            state.reminders = state.reminders.filter(
              (reminder) => reminder.id !== id,
            );
          },
          false,
          "deleteReminder",
        ),
    })),
    { name: "CalendarStore" },
  ),
);
