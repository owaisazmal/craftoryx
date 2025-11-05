'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import BlurText from './BlurText';
import GooeyNav from './GooeyNav';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/dev-log', label: 'Dev Log' },
    { href: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const index = navItems.findIndex(item => item.href === pathname);
    if (index !== -1) {
      setActiveIndex(index);
    }
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold font-mono text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors z-10 relative"
          >
            <BlurText
              text="CraftoryX"
              className="text-xl font-bold font-mono"
              animateBy="chars"
              delay={50}
              direction="top"
              threshold={0}
            />
          </Link>

          {/* Desktop Navigation - GooeyNav */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 w-full pointer-events-none">
            <div className="pointer-events-auto">
              <GooeyNav
                items={navItems}
                initialActiveIndex={activeIndex}
              />
            </div>
          </div>

          {/* Desktop Theme Toggle */}
          <div className="hidden md:flex items-center z-10 relative">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                    pathname === item.href
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
