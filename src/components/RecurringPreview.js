import React from 'react';
import useDateStore from '../../store';

const RecurringPreview = () => {
  const { recurringDates } = useDateStore(); // Get recurring dates from the store

  return (
    <div className="w-full mt-6">
      <h3 className="text-lg font-medium text-gray-700 mb-2">Recurring Dates</h3>
      <div className="overflow-y-auto max-h-40 border border-gray-200 p-4 rounded-lg shadow-inner bg-gray-50">
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {recurringDates.length > 0 ? (
            recurringDates.map((date, index) => (
              date ? (
                <li key={index} className="hover:text-indigo-600 transition duration-200">
                  {new Date(date).toDateString()} {/* Properly format the date */}
                </li>
              ) : (
                <li key={index} className="text-red-500">Invalid Date</li>
              )
            ))
          ) : (
            <li>No dates selected</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RecurringPreview;
