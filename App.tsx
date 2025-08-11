import React, { useState, useMemo } from 'react';
import { DateTimePicker } from './components/DateTimePicker';
import { TimestampOutput } from './components/TimestampOutput';
import { SEOContent } from './components/SEOContent';
import { LiveTimestamp } from './components/LiveTimestamp';
import { TimestampConverter } from './components/TimestampConverter';
import { TIMESTAMP_FORMATS } from './constants';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const unixTimestamp = useMemo(() => Math.floor(selectedDate.getTime() / 1000), [selectedDate]);

  return (
    <div className="min-h-screen flex flex-col items-center p-4 sm:p-6 md:p-8 font-sans">
      <header className="w-full max-w-7xl text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2">
          Discord Timestamp Generator
        </h1>
        <p className="text-lg text-gray-400 mb-6">
          Create dynamic timestamps that adapt to every user's timezone.
        </p>
        <LiveTimestamp />
      </header>

      <main className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <section className="bg-discord-gray-2 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Select Date & Time</h2>
          <DateTimePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        </section>

        <section className="bg-discord-gray-2 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Generated Timestamps</h2>
          <div className="space-y-3">
            {TIMESTAMP_FORMATS.map(format => (
              <TimestampOutput key={format.key} format={format} unixTimestamp={unixTimestamp} />
            ))}
          </div>
        </section>
      </main>

      <TimestampConverter />

      <SEOContent />

      <footer className="w-full max-w-7xl mt-12 text-center text-gray-500 border-t border-discord-gray-3 pt-6">
        <p>&copy; {new Date().getFullYear()} Discord Timestamp Generator. Built with passion by a world-class engineer.</p>
        <div className="flex justify-center items-center space-x-2 text-sm mt-1">
            <p>This is an unofficial tool and is not affiliated with Discord Inc.</p>
            <span>|</span>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-discord-blurple transition-colors">Sitemap</a>
        </div>
      </footer>
    </div>
  );
}

export default App;