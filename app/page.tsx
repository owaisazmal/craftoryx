import Link from 'next/link';
import { getFeaturedApps } from '@/data/apps';
import { apps } from '@/data/apps';
import AppCard from '@/components/AppCard';
import ProgressBar from '@/components/ProgressBar';
import Timeline from '@/components/Timeline';

export default function Home() {
  const featuredApps = getFeaturedApps();
  const shippedCount = apps.filter(app => app.status === 'Released').length;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 font-mono leading-tight">
            Building 10 iOS apps from scratch in one year.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Shipping in public. Weekly logs. Open roadmaps. Real App Store releases.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link
              href="/dev-log"
              className="px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Follow the Journey
            </Link>
            <Link
              href="/projects"
              className="px-6 sm:px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProgressBar current={shippedCount} total={10} className="mb-12" />
          <Timeline />
        </div>
      </section>

      {/* Featured Apps */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-mono">
              Featured Apps
            </h2>
            <Link
              href="/projects"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 sm:py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 font-mono">
                10
              </div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Apps planned
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 font-mono">
                {shippedCount}
              </div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Apps shipped
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 font-mono">
                12
              </div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Months timeline
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center gap-1 sm:gap-2 justify-center mb-2">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white font-mono">
                  ?
                </span>
              </div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                GitHub stars
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <div className="flex gap-4 justify-center items-center">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="Follow on GitHub"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="Follow on Twitter / X"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="Follow on LinkedIn"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About CraftoryX Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 font-mono">
              About CraftoryX
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
              One mission. Ten apps. Twelve months.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white dark:bg-gray-950 rounded-lg p-6 sm:p-8 mb-6 sm:mb-8 border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 font-mono">
              The Mission
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                CraftoryX is my commitment to ship 10 production-ready iOS apps to the App Store in one year.
                This isn&apos;t about building quick prototypes or side projects that never see the light of day.
              </p>
              <p className="font-semibold text-gray-900 dark:text-white">Every app will be:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Built with Swift and native iOS frameworks</li>
                <li>Polished, accessible, and user-tested</li>
                <li>Published to the App Store</li>
                <li>Documented with open roadmaps and changelogs</li>
                <li>Developed transparently with weekly dev logs</li>
              </ul>
            </div>
          </div>

          {/* The Rules */}
          <div className="bg-white dark:bg-gray-950 rounded-lg p-6 sm:p-8 mb-6 sm:mb-8 border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 font-mono">
              The Rules
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">🎯</span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Swift Only</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    All apps built with Swift, SwiftUI, and native iOS frameworks. No cross-platform tools.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">🚀</span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Real Releases</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Every app must be submitted to and approved by the App Store. No prototypes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">📝</span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Build in Public</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Weekly dev logs documenting progress, challenges, and lessons learned.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">♿</span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Accessibility First</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    VoiceOver support, Dynamic Type, keyboard navigation, and WCAG AA+ compliance.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">⏰</span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">One Year Deadline</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    All 10 apps released between September 2025 and August 2026.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-white dark:bg-gray-950 rounded-lg p-6 sm:p-8 mb-6 sm:mb-8 border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 font-mono">
              Tech Stack & Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Swift', 'SwiftUI', 'UIKit', 'Combine', 'CoreData', 'CloudKit', 'CoreML', 'Vision', 'HealthKit', 'WidgetKit', 'App Store Optimization', 'Accessibility'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Public Commitments */}
          <div className="bg-white dark:bg-gray-950 rounded-lg p-6 sm:p-8 mb-6 sm:mb-8 border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 font-mono">
              Public Commitments
            </h3>
            <div className="space-y-3">
              {[
                'Weekly dev log posts (every Monday)',
                'Open roadmaps for all apps',
                'TestFlight betas before public launch',
                'WCAG AA+ accessibility compliance',
                'Transparent about failures and pivots'
              ].map((commitment, index) => (
                <div key={index} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked
                    readOnly
                    className="w-5 h-5 rounded border-gray-300 dark:border-gray-600 text-blue-600"
                  />
                  <span className="text-gray-700 dark:text-gray-300">{commitment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-mono">
              About the Developer
            </h2>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 sm:p-8 border border-gray-200 dark:border-gray-800">
            {/* Profile Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
              <img
  src="https://media.licdn.com/dms/image/v2/D5603AQFNn4szZ9DOvQ/profile-displayphoto-shrink_800_800/B56ZcgOyXIHEAc-/0/1748592438322?e=1763596800&v=beta&t=2EB4kuEz4OzTMwy8kvMtaz2kvvslg1EF1ljhPv2fIlk"
  alt="Owais Khan"
  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-gray-200 dark:border-gray-700"
/>
              <div className="flex-shrink-0">
                <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-2">
                  
                </p>
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Owais Khan
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  He/Him
                </p>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4">
                  iOS Developer | Machine Learning | Computer Science Graduate
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                    Swift
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                    Async/Await
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                    ARKit
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                    Machine Learning
                  </span>
                </div>
              </div>
            </div>

            {/* About Text */}
            <div className="space-y-4 text-gray-700 dark:text-gray-300 mb-6">
              <p>
                I&apos;m a solo developer currently working at <strong>Hidonix</strong> as a Mobile Application Developer.
                This project is something I&apos;ve always wanted to do building and shipping 10 iOS apps in 12 months but
                I never had the time during my studies.
              </p>
              <p>
                After graduating and gaining experience in iOS development,
                AR applications, machine learning, and autonomous systems, I&apos;m finally ready to take on this
                challenge. This is my opportunity to combine everything I&apos;ve learned and ship real products to
                the App Store.
              </p>
              <p>
                Throughout my career, I&apos;ve worked on cross-platform mobile applications using Swift, Kotlin,
                and React Native. I&apos;ve developed AR shopping assistants with ARKit, implemented YOLO for object
                detection in autonomous vehicles, and built responsive user interfaces that millions could use.
              </p>
              <p>
                Now it&apos;s time to build something for myself and share the entire journey with you.
              </p>
            </div>

            {/* Experience Highlight */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Current Role
              </h4>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                  H
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white">
                    Mobile Application Developer
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Hidonix · Full-time
                  </p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm">
                    Aug 2025 - Present · Los Angeles, CA
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
                    Developing mobile applications for iOS and Android using Swift and Kotlin. Integrating RESTful APIs and optimizing app performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-blue-600 dark:bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 font-mono">
            Want to follow along?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8">
            Get weekly dev logs, behind-the-scenes updates, and early TestFlight access.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/contact"
              className="px-6 sm:px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Join TestFlight Beta
            </Link>
            <Link
              href="/contact"
              className="px-6 sm:px-8 py-3 bg-blue-700 dark:bg-blue-800 text-white border border-blue-500 rounded-lg font-medium hover:bg-blue-800 dark:hover:bg-blue-900 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Subscribe to Newsletter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
