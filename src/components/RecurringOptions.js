import React, { useEffect } from 'react';
import useDateStore from '../../store';

const RecurringOptions = () => {
  const { recurrence, setRecurrence, selectedDate, setRecurringDates } = useDateStore();

  const handleRecurrenceChange = (e) => {
    setRecurrence(e.target.value);
  };

  const calculateRecurringDates = () => {
    if (!selectedDate) return; // If no date is selected, exit

    let dates = [];
    let current = new Date(selectedDate);

    if (recurrence === 'none') {
      dates.push(new Date(current)); // Push only the selected date
    } else if (recurrence === 'daily') {
      for (let i = 0; i < 10; i++) {
        dates.push(new Date(current)); // Add the date to the array
        current.setDate(current.getDate() + 1); // Increment by 1 day
      }
    } else if (recurrence === 'weekly') {
      for (let i = 0; i < 10; i++) {
        dates.push(new Date(current)); // Add the date to the array
        current.setDate(current.getDate() + 7); // Increment by 1 week
      }
    } else if (recurrence === 'monthly') {
      for (let i = 0; i < 10; i++) {
        dates.push(new Date(current)); // Add the date to the array
        current.setMonth(current.getMonth() + 1); // Increment by 1 month
      }
    }

    setRecurringDates(dates); // Update the store with the calculated recurring dates
  };

  useEffect(() => {
    calculateRecurringDates(); // Recalculate dates when recurrence or date changes
  }, [recurrence, selectedDate]);

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">Recurrence Options</label>
      <select
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-300"
        value={recurrence}
        onChange={handleRecurrenceChange}
      >
        <option value="none">None</option>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
    </div>
  );
};

export default RecurringOptions;
