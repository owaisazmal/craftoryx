import type { Metadata } from 'next';
import MagnetLines from '@/components/MagnetLines';

export const metadata: Metadata = {
  title: 'About - The CraftoryX Mission',
  description: 'Learn about the CraftoryX mission: building 10 production-ready iOS apps in 12 months using Swift and SwiftUI.',
};

export default function AboutPage() {
  const skills = [
    'Swift',
    'SwiftUI',
    'UIKit',
    'Combine',
    'CoreData',
    'CloudKit',
    'CoreML',
    'Vision',
    'HealthKit',
    'WidgetKit',
    'App Store Optimization',
    'Accessibility',
  ];

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background covering header through Public Commitments */}
        <div className="relative">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <MagnetLines
              rows={12}
              columns={14}
              containerSize="100%"
              lineColor="#cfd8dc"
              lineWidth="2px"
              lineHeight="28px"
              baseAngle={-8}
              className="opacity-60"
            />
          </div>

          <div className="relative z-10">
            {/* Header */}
            <div className="mb-8 sm:mb-12 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 font-mono">
                About CraftoryX
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
                One mission. Ten apps. Twelve months.
              </p>
            </div>

            {/* Mission */}
            <section className="bg-white/70 dark:bg-gray-900/60 backdrop-blur-sm rounded-lg p-6 sm:p-8 mb-6 sm:mb-8 border border-gray-200 dark:border-gray-800">
          <h2 className="text-xl sm:text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 font-mono">
            The Mission
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              CraftoryX is my commitment to ship 10 production-ready iOS apps to the App Store in one year.
              This isn&apos;t about building quick prototypes or side projects that never see the light of day.
            </p>
            <p>
              Every app will be:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Built with Swift and native iOS frameworks</li>
              <li>Polished, accessible, and user-tested</li>
              <li>Published to the App Store</li>
              <li>Documented with open roadmaps and changelogs</li>
              <li>Developed transparently with weekly dev logs</li>
            </ul>
          </div>
            </section>

            {/* Constraints */}
            <section className="bg-white/70 dark:bg-gray-900/60 backdrop-blur-sm rounded-lg p-6 sm:p-8 mb-6 sm:mb-8 border border-gray-200 dark:border-gray-800">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 font-mono">
            The Rules
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Swift Only</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  All apps built with Swift, SwiftUI, and native iOS frameworks. No cross-platform tools.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🚀</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Real Releases</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Every app must be submitted to and approved by the App Store. No prototypes.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📝</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Build in Public</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Weekly dev logs documenting progress, challenges, and lessons learned.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">♿</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Accessibility First</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  VoiceOver support, Dynamic Type, keyboard navigation, and WCAG AA+ compliance.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">⏰</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">One Year Deadline</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  All 10 apps released between September 2025 and August 2026.
                </p>
              </div>
            </div>
          </div>
            </section>

            {/* Developer Bio */}
            <section className="bg-white/70 dark:bg-gray-900/60 backdrop-blur-sm rounded-lg p-6 sm:p-8 mb-6 sm:mb-8 border border-gray-200 dark:border-gray-800">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 font-mono">
            About the Developer
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              I&apos;m an indie iOS developer passionate about creating focused, well-crafted apps that solve
              real problems. This challenge is about pushing my skills, learning in public, and building
              a portfolio of shipped products.
            </p>
            <p>
              I believe in:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Shipping is better than perfection</li>
              <li>Constraints breed creativity</li>
              <li>User experience over feature bloat</li>
              <li>Learning by building</li>
            </ul>
          </div>
            </section>

            {/* Skills */}
            <section className="bg-white/70 dark:bg-gray-900/60 backdrop-blur-sm rounded-lg p-6 sm:p-8 mb-6 sm:mb-8 border border-gray-200 dark:border-gray-800">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 font-mono">
            Tech Stack & Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
            </section>

            {/* Public Commitments */}
            <section className="bg-white/70 dark:bg-gray-900/60 backdrop-blur-sm rounded-lg p-6 sm:p-8 mb-6 sm:mb-8 border border-gray-200 dark:border-gray-800">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 font-mono">
            Public Commitments
          </h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked
                readOnly
                className="w-5 h-5 rounded border-gray-300 dark:border-gray-600 text-blue-600"
              />
              <span className="text-gray-700 dark:text-gray-300">
                Weekly dev log posts (every Monday)
              </span>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked
                readOnly
                className="w-5 h-5 rounded border-gray-300 dark:border-gray-600 text-blue-600"
              />
              <span className="text-gray-700 dark:text-gray-300">
                Open roadmaps for all apps
              </span>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked
                readOnly
                className="w-5 h-5 rounded border-gray-300 dark:border-gray-600 text-blue-600"
              />
              <span className="text-gray-700 dark:text-gray-300">
                TestFlight betas before public launch
              </span>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked
                readOnly
                className="w-5 h-5 rounded border-gray-300 dark:border-gray-600 text-blue-600"
              />
              <span className="text-gray-700 dark:text-gray-300">
                WCAG AA+ accessibility compliance
              </span>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked
                readOnly
                className="w-5 h-5 rounded border-gray-300 dark:border-gray-600 text-blue-600"
              />
              <span className="text-gray-700 dark:text-gray-300">
                Transparent about failures and pivots
              </span>
            </div>
          </div>
        </section>
          </div>
        </div>

        {/* Contact CTA (outside background wrapper) */}
        <section className="bg-blue-600 dark:bg-blue-700 rounded-lg p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 font-mono">
            Let&apos;s Connect
          </h2>
          <p className="text-blue-100 mb-6">
            Interested in collaborating, hiring, or just want to chat about iOS development?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blue-700 dark:bg-blue-800 text-white border border-blue-500 rounded-lg font-medium hover:bg-blue-800 dark:hover:bg-blue-900 transition-colors"
            >
              View GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
