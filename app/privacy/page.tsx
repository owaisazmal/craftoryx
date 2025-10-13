import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for CraftoryX website and newsletter.',
};

export default function PrivacyPage() {
  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 font-mono">
          Privacy Policy
        </h1>

        <div className="prose prose-lg dark:prose-invert bg-white dark:bg-gray-900 rounded-lg p-8 border border-gray-200 dark:border-gray-800">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-8">
            Last updated: October 13, 2025
          </p>

          <h2>Overview</h2>
          <p>
            CraftoryX respects your privacy. This policy explains how we collect, use, and protect
            your personal information when you use our website.
          </p>

          <h2>Information We Collect</h2>
          <ul>
            <li>
              <strong>Contact Information:</strong> Name and email address when you submit the contact
              form or subscribe to our newsletter
            </li>
            <li>
              <strong>Analytics:</strong> Basic usage data through standard web analytics (page views,
              time on site, referrers)
            </li>
            <li>
              <strong>TestFlight Data:</strong> Apple manages all TestFlight beta testing data
            </li>
          </ul>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>Respond to your contact form submissions</li>
            <li>Send newsletter updates (only if you subscribe)</li>
            <li>Invite you to TestFlight betas (if requested)</li>
            <li>Improve the website and user experience</li>
          </ul>

          <h2>Data Sharing</h2>
          <p>
            We do not sell, trade, or share your personal information with third parties, except:
          </p>
          <ul>
            <li>Email service providers (for newsletter delivery)</li>
            <li>Analytics platforms (anonymized data only)</li>
            <li>As required by law</li>
          </ul>

          <h2>Cookies</h2>
          <p>
            We use minimal cookies for:
          </p>
          <ul>
            <li>Dark/light theme preference</li>
            <li>Basic analytics</li>
          </ul>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your data</li>
            <li>Request deletion of your data</li>
            <li>Unsubscribe from emails anytime</li>
            <li>Opt out of analytics</li>
          </ul>

          <h2>Contact</h2>
          <p>
            Questions about this privacy policy? Email us at{' '}
            <a href="mailto:privacy@craftoryx.com">privacy@craftoryx.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
