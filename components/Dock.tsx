'use client';

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Children, cloneElement, useEffect, useMemo, useRef, useState } from 'react';
import './Dock.css';

function DockItem({ children, className = '', onClick, mouseX, spring, distance, magnification, baseItemSize }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const isHovered = useMotionValue(0);
  const rafRef = useRef<number>();

  const mouseDistance = useTransform(mouseX, (val) => {
    if (!ref.current || val === Infinity) return Infinity;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    return val - centerX;
  });

  const targetSize = useTransform(mouseDistance, (dist) => {
    if (dist === Infinity || Math.abs(dist) > distance) return baseItemSize;
    const normalizedDistance = Math.abs(dist);
    const scale = Math.max(0, 1 - normalizedDistance / distance);
    return baseItemSize + (magnification - baseItemSize) * scale;
  });
  
  const size = useSpring(targetSize, { 
    mass: spring.mass || 0.15, 
    stiffness: spring.stiffness || 300, 
    damping: spring.damping || 25,
    restDelta: 0.5,
    restSpeed: 0.5
  });

  return (
    <motion.div
      ref={ref}
      style={{
        width: size,
        height: size
      }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      className={`dock-item ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {Children.map(children, (child: any) => cloneElement(child, { isHovered }))}
    </motion.div>
  );
}

function DockLabel({ children, className = '', ...rest }: any) {
  const { isHovered } = rest;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = isHovered.on('change', (latest: number) => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className={`dock-label ${className}`}
          role="tooltip"
          style={{ x: '-50%' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`dock-icon ${className}`}>{children}</div>;
}

interface DockItemType {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  className?: string;
}

interface DockProps {
  items: DockItemType[];
  className?: string;
  spring?: { mass: number; stiffness: number; damping: number };
  magnification?: number;
  distance?: number;
  panelHeight?: number;
  dockHeight?: number;
  baseItemSize?: number;
}

export default function Dock({
  items,
  className = '',
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 68,
  dockHeight = 256,
  baseItemSize = 50
}: DockProps) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification, dockHeight]
  );
  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, { 
    mass: spring.mass || 0.15, 
    stiffness: spring.stiffness || 300, 
    damping: spring.damping || 25,
    restDelta: 0.5,
    restSpeed: 0.5
  });

  return (
    <motion.div style={{ height, scrollbarWidth: 'none' }} className="dock-outer">
      <motion.div
        onMouseMove={(e) => {
          if (rafRef.current) cancelAnimationFrame(rafRef.current);
          rafRef.current = requestAnimationFrame(() => {
            isHovered.set(1);
            mouseX.set(e.pageX);
          });
        }}
        onMouseLeave={() => {
          if (rafRef.current) cancelAnimationFrame(rafRef.current);
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={`dock-panel ${className}`}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            onClick={item.onClick}
            className={item.className}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
          >
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel>{item.label}</DockLabel>
          </DockItem>
        ))}
      </motion.div>
    </motion.div>
  );
}

