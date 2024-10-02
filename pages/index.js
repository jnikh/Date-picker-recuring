import Head from 'next/head';
import DatePickerComponent from '@/components/DatePickerComponent';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Date Picker with Recurrence</title>
        <meta name="description" content="A reusable date picker component with recurring date options" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Date Picker</h1>
          <p className="text-center text-gray-500 mb-8">Select a date and set the recurrence</p>
          <DatePickerComponent />
        </div>
      </main>
    </div>
  );
}
