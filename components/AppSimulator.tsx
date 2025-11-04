'use client';

import { useState } from 'react';
import Image from 'next/image';

interface AppSimulatorProps {
  appName: string;
  appIcon?: string;
  screenshots?: string[];
  features?: string[];
  accentColor?: string;
}

export default function AppSimulator({
  appName,
  appIcon,
  screenshots = [],
  features = [],
  accentColor = '#007AFF',
}: AppSimulatorProps) {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isHomeScreen, setIsHomeScreen] = useState(true);

  const handleAppTap = () => {
    setIsHomeScreen(false);
  };

  const handleHomeTap = () => {
    setIsHomeScreen(true);
    setCurrentScreen(0);
  };

  const nextScreen = () => {
    setCurrentScreen((prev) => (prev + 1) % Math.max(screenshots.length, 1));
  };

  const prevScreen = () => {
    setCurrentScreen((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <div className="flex flex-col items-center">
      {/* iPhone Frame */}
      <div className="relative w-[280px] sm:w-[320px] h-[560px] sm:h-[640px] bg-gray-900 rounded-[3rem] shadow-2xl p-3 border-8 border-gray-800">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-10"></div>

        {/* Screen */}
        <div className="relative w-full h-full bg-white dark:bg-gray-950 rounded-[2.5rem] overflow-hidden">
          {isHomeScreen ? (
            /* Home Screen */
            <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-8 flex flex-col">
              {/* Status Bar */}
              <div className="flex justify-between items-center text-white text-xs mb-8">
                <span>9:41</span>
                <div className="flex gap-1">
                  <span>📶</span>
                  <span>📡</span>
                  <span>🔋</span>
                </div>
              </div>

              {/* App Icon Grid */}
              <div className="flex-1 grid grid-cols-4 gap-4 content-start">
                {/* Demo App */}
                <button
                  onClick={handleAppTap}
                  className="flex flex-col items-center gap-2 active:scale-95 transition-transform"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg"
                    style={{ backgroundColor: accentColor }}
                  >
                    {appIcon || appName.charAt(0)}
                  </div>
                  <span className="text-white text-xs text-center drop-shadow-lg">
                    {appName}
                  </span>
                </button>

                {/* Placeholder Apps */}
                {[...Array(11)].map((_, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 opacity-60">
                    <div className="w-14 h-14 rounded-2xl bg-white/30 backdrop-blur-sm"></div>
                    <span className="text-white text-xs">App</span>
                  </div>
                ))}
              </div>

              {/* Dock */}
              <div className="mt-auto bg-white/20 backdrop-blur-lg rounded-3xl p-3 flex justify-around">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-12 h-12 rounded-2xl bg-white/30"></div>
                ))}
              </div>
            </div>
          ) : (
            /* App Screen */
            <div className="w-full h-full bg-white dark:bg-gray-950 flex flex-col">
              {/* App Header */}
              <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-4 flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white text-xl font-bold"
                  style={{ backgroundColor: accentColor }}
                >
                  {appIcon || appName.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {appName}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Demo Preview
                  </p>
                </div>
              </div>

              {/* App Content */}
              <div className="flex-1 overflow-auto p-4 bg-gray-50 dark:bg-gray-950">
                {screenshots.length > 0 ? (
                  <div className="space-y-4">
                    {/* Screenshot Navigation */}
                    <div className="flex items-center justify-between mb-2">
                      <button
                        onClick={prevScreen}
                        disabled={screenshots.length <= 1}
                        className="px-3 py-1 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm disabled:opacity-30"
                        style={{ borderColor: accentColor }}
                      >
                        ← Prev
                      </button>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {currentScreen + 1} / {screenshots.length}
                      </span>
                      <button
                        onClick={nextScreen}
                        disabled={screenshots.length <= 1}
                        className="px-3 py-1 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm disabled:opacity-30"
                        style={{ borderColor: accentColor }}
                      >
                        Next →
                      </button>
                    </div>

                    {/* Current Screenshot */}
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-4 aspect-video flex items-center justify-center">
                      <p className="text-gray-400 dark:text-gray-500 text-center text-sm">
                        {screenshots[currentScreen] || 'Screenshot Preview'}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">{appIcon || '📱'}</div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {appName}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      Coming Soon
                    </p>
                  </div>
                )}

                {/* Features List */}
                {features.length > 0 && (
                  <div className="mt-4 bg-white dark:bg-gray-900 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: accentColor }}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Bottom Button */}
              <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                <button
                  className="w-full py-3 rounded-xl text-white font-semibold text-sm"
                  style={{ backgroundColor: accentColor }}
                >
                  Download on TestFlight
                </button>
              </div>
            </div>
          )}

          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-800 dark:bg-gray-600 rounded-full"></div>
        </div>

        {/* Home Button (clickable area) */}
        {!isHomeScreen && (
          <button
            onClick={handleHomeTap}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-6 z-20"
            aria-label="Go to home screen"
          />
        )}
      </div>

      {/* Instructions */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {isHomeScreen ? (
            <>Tap the app icon to see a preview</>
          ) : (
            <>Tap the home indicator to return</>
          )}
        </p>
      </div>
    </div>
  );
}
