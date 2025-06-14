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
  addReminder: (reminder: EventReminder) => void;
  toggleReminder: (id: number) => void;
};

export const useCalendarStore = create<CalendarState>()(
  devtools(
    immer((set) => ({
      reminders: [
        { id: 1, label: "10 minutes", minutes: 10, checked: true },
        { id: 2, label: "1 hour", minutes: 60, checked: true },
        { id: 3, label: "1 day", minutes: 60 * 24, checked: true },
      ],
      addReminder: (reminder: EventReminder) =>
        set((state) => {
          state.reminders.concat(reminder);
        }),
      toggleReminder: (id: number) =>
        set((state) => {
          const index = state.reminders.findIndex(
            (reminder: EventReminder) => reminder.id === id,
          );
          state.reminders[index].checked = !state.reminders[index].checked;
        }),
    })),
  ),
);
