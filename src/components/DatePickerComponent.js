import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import useDateStore from '../../store';
import RecurringOptions from './RecurringOptions';
import RecurringPreview from './RecurringPreview';

const DatePickerComponent = () => {
  const { setSelectedDate, setRecurringDates } = useDateStore();
  const [value, setValue] = useState(new Date());

  const handleDateChange = (date) => {
    if (date) {
      setValue(date);
      setSelectedDate(date); // Set the selected date in the store
      setRecurringDates([date]); // Initialize recurring dates with the selected date
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <DatePicker
        onChange={handleDateChange}
        value={value}
        className="border border-gray-300 rounded-lg p-3 w-full shadow-sm"
        format="y-MM-dd"
      />
      <RecurringOptions />
      <RecurringPreview />
    </div>
  );
};

export default DatePickerComponent;
