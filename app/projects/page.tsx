'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { apps } from '@/data/apps';
import { collaborators } from '@/data/collaborators';
import { AppStatus } from '@/types';
import AppCard from '@/components/AppCard';
import type { Metadata } from 'next';
import TargetCursor from '@/components/TargetCursor';

const filters: ('All' | AppStatus)[] = ['All', 'Released', 'In Progress', 'Planned'];

interface BubblePosition {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

function CollaborationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<BubblePosition[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const animationRef = useRef<number>();

  // Initialize bubble positions
  useEffect(() => {
    const initialPositions: BubblePosition[] = collaborators.map((_, i) => {
      const angle = (i / collaborators.length) * Math.PI * 2;
      const radius = 80;
      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      };
    });
    setPositions(initialPositions);
  }, []);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current && isHovering) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        setMousePos({
          x: e.clientX - rect.left - centerX,
          y: e.clientY - rect.top - centerY,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovering]);

  // Animate bubbles
  useEffect(() => {
    if (positions.length === 0) return;

    const animate = () => {
      setPositions((prev) => {
        const newPositions = prev.map((pos, i) => {
          let { x, y, vx, vy } = pos;

          // Mouse repulsion effect when hovering
          if (isHovering) {
            const dx = x - mousePos.x;
            const dy = y - mousePos.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const repulsionRadius = 100; // Distance at which bubbles start moving away

            if (distance < repulsionRadius && distance > 0) {
              const force = (repulsionRadius - distance) / repulsionRadius;
              const angle = Math.atan2(dy, dx);
              vx += Math.cos(angle) * force * 0.5;
              vy += Math.sin(angle) * force * 0.5;
            }
          }

          // Update position
          x += vx;
          y += vy;

          // Bounce off walls (container bounds)
          const maxX = 150;
          const maxY = 150;
          if (x > maxX || x < -maxX) vx *= -1;
          if (y > maxY || y < -maxY) vy *= -1;

          // Keep within bounds
          x = Math.max(-maxX, Math.min(maxX, x));
          y = Math.max(-maxY, Math.min(maxY, y));

          // Bubble collision detection with other bubbles
          const bubbleRadius = 40; // Half of bubble size
          prev.forEach((other, j) => {
            if (i !== j) {
              const dx = other.x - x;
              const dy = other.y - y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              const minDistance = bubbleRadius * 2;

              if (distance < minDistance) {
                // Simple collision response
                const angle = Math.atan2(dy, dx);
                const targetX = x + Math.cos(angle) * minDistance;
                const targetY = y + Math.sin(angle) * minDistance;
                const ax = (targetX - other.x) * 0.05;
                const ay = (targetY - other.y) * 0.05;
                vx -= ax;
                vy -= ay;
              }
            }
          });

          // Add slight random movement for floating effect
          vx += (Math.random() - 0.5) * 0.05;
          vy += (Math.random() - 0.5) * 0.05;

          // Damping to prevent too fast movement
          vx *= 0.98;
          vy *= 0.98;

          return { x, y, vx, vy };
        });

        return newPositions;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [positions.length, mousePos, isHovering]);

  return (
    <section className="mb-12 bg-white dark:bg-gray-950 rounded-lg p-8 sm:p-12 border border-gray-200 dark:border-gray-800">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Collaboration
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Ideas brought to life through collaboration. Join the circle!
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative h-96 flex items-center justify-center"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {collaborators.map((collab, index) => {
          const pos = positions[index] || { x: 0, y: 0 };

          const bubbleContent = (
            <div
              className={`absolute transition-all duration-200 ease-out ${collab.link ? 'hover:scale-110 cursor-pointer' : ''}`}
              style={{
                transform: `translate(${pos.x}px, ${pos.y}px)`,
              }}
            >
              {collab.imageUrl ? (
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-xl ring-2 ring-gray-200 dark:ring-gray-700">
                  <Image
                    src={collab.imageUrl}
                    alt={collab.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.className += ` bg-gradient-to-br ${collab.color} flex items-center justify-center text-white text-2xl font-bold`;
                        parent.textContent = collab.initials;
                      }
                    }}
                  />
                </div>
              ) : (
                <div
                  className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br ${collab.color} flex items-center justify-center text-white text-2xl font-bold shadow-xl ring-2 ring-gray-200 dark:ring-gray-700`}
                  title={collab.name}
                >
                  {collab.initials}
                </div>
              )}
            </div>
          );

          return collab.link ? (
            <Link key={collab.id} href={collab.link} className="cursor-target">
              {bubbleContent}
            </Link>
          ) : (
            <div key={collab.id}>{bubbleContent}</div>
          );
        })}
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Want to see your profile here?{' '}
          <Link href="/contact" className="cursor-target text-blue-600 dark:text-blue-400 hover:underline font-medium">
            Submit your app idea
          </Link>
        </p>
      </div>
    </section>
  );
}

function ContactDeveloperSection() {
  return (
    <section className="mb-12 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-lg p-8 sm:p-12 text-white shadow-xl">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Contact the Developer
        </h2>
        <p className="text-lg sm:text-xl text-blue-50 mb-8">
          Have questions, ideas, or just want to say hi? I&apos;d love to hear from you!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <a
            href="/contact"
            className="cursor-target bg-white text-blue-600 px-6 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-md flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send Email
          </a>

          <a
            href="https://www.linkedin.com/in/owais-khan-266492222/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-target bg-white/10 backdrop-blur-sm border-2 border-white text-white px-6 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            View Profile
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100">
          <a
            href="https://github.com/owaisazmal"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-target flex items-center gap-2 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<'All' | AppStatus>('All');

  const filteredApps = activeFilter === 'All'
    ? apps
    : apps.filter(app => app.status === activeFilter);

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-950 min-h-screen">
      {/* Projects-only custom cursor */}
      <TargetCursor targetSelector=".cursor-target" spinDuration={2} hideDefaultCursor={true} fitOffset={0} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Call to Action Banner */}
        <div className="mb-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 sm:p-8 text-white shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Paying for an app you wish was free?
          </h2>
          <p className="text-lg sm:text-xl mb-4 text-blue-50">
            Let me build it for you, at no cost.
          </p>
          <p className="text-base sm:text-lg mb-4 text-blue-100">
            Email me your idea, and you&apos;ll be credited in the collaboration section.
          </p>
          <p className="text-sm sm:text-base mb-6 text-blue-100 italic">
            Found a bug or have feedback? Let me know!
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/contact"
              className="cursor-target inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-md text-center"
            >
              Submit Your Idea
            </a>
            <a
              href="/contact?subject=bug"
              className="cursor-target inline-block bg-white/10 backdrop-blur-sm border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors text-center"
            >
              Report a Bug
            </a>
          </div>
        </div>

        {/* Collaboration Section */}
        <CollaborationSection />

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-mono">
            All Projects
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            10 iOS apps, built with Swift, shipping throughout 2025-2026.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-3 mb-8" role="tablist" aria-label="Filter projects by status">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`cursor-target px-4 py-2 rounded-lg font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400'
              }`}
              role="tab"
              aria-selected={activeFilter === filter}
              aria-controls="projects-grid"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Apps Grid */}
        <div
          id="projects-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="tabpanel"
        >
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        {filteredApps.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No apps found for this filter.
            </p>
          </div>
        )}

        {/* Spacer */}
        <div className="mt-16" />

        {/* Contact Developer Section */}
        <ContactDeveloperSection />
      </div>
    </div>
  );
}
