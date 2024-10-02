import { create } from 'zustand';

const useDateStore = create((set) => ({
  selectedDate: null,
  recurringDates: [],
  recurrence: 'none',
  setSelectedDate: (date) => set(() => ({ selectedDate: date })),
  setRecurringDates: (dates) => set(() => ({ recurringDates: dates })),
  setRecurrence: (recurrence) => set(() => ({ recurrence })),
}));

export default useDateStore;
