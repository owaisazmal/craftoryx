import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "CraftoryX - Building 10 iOS Apps in 12 Months",
    template: "%s | CraftoryX"
  },
  description: "Shipping in public. Weekly logs. Open roadmaps. Real App Store releases. Follow the journey of building 10 production-ready iOS apps in one year.",
  keywords: ["iOS development", "Swift", "SwiftUI", "indie developer", "app development", "build in public"],
  authors: [{ name: "CraftoryX" }],
  creator: "CraftoryX",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://craftoryx.com",
    siteName: "CraftoryX",
    title: "CraftoryX - Building 10 iOS Apps in 12 Months",
    description: "Shipping in public. Weekly logs. Open roadmaps. Real App Store releases.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CraftoryX - Building 10 iOS Apps in 12 Months",
    description: "Shipping in public. Weekly logs. Open roadmaps. Real App Store releases.",
    creator: "@craftoryx",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
