"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface AnimatedGradientBackgroundProps {
  /** Initial size of the radial gradient, defining the starting width. */
  startingGap?: number;
  /** Enables or disables the breathing animation effect. */
  Breathing?: boolean;
  /** Array of colors to use in the radial gradient. */
  gradientColors?: string[];
  /** Array of percentage stops corresponding to each color in `gradientColors`. */
  gradientStops?: number[];
  /** Speed of the breathing animation. */
  animationSpeed?: number;
  /** Maximum range for the breathing animation in percentage points. */
  breathingRange?: number;
  /** Additional inline styles for the gradient container. */
  containerStyle?: React.CSSProperties;
  /** Additional class names for the gradient container. */
  containerClassName?: string;
  /** Additional top offset for the gradient container. */
  topOffset?: number;
}

/**
 * Renders a customizable animated radial gradient background with a subtle breathing effect.
 */
export function AnimatedGradientBackground({
  startingGap = 125,
  Breathing = false,
  gradientColors = [
    "#0A0A0A",
    "#2979FF",
    "#FF80AB",
    "#FF6D00",
    "#FFD600",
    "#00E676",
    "#3D5AFE",
  ],
  gradientStops = [35, 50, 60, 70, 80, 90, 100],
  animationSpeed = 0.02,
  breathingRange = 5,
  containerStyle = {},
  topOffset = 0,
  containerClassName = "",
}: AnimatedGradientBackgroundProps) {
  if (gradientColors.length !== gradientStops.length) {
    throw new Error(
      `gradientColors and gradientStops must have the same length. Received gradientColors length: ${gradientColors.length}, gradientStops length: ${gradientStops.length}`
    );
  }

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animationFrame: number;
    let width = startingGap;
    let directionWidth = 1;

    const animateGradient = () => {
      if (width >= startingGap + breathingRange) directionWidth = -1;
      if (width <= startingGap - breathingRange) directionWidth = 1;

      if (!Breathing) directionWidth = 0;
      width += directionWidth * animationSpeed;

      const gradientStopsString = gradientStops
        .map((stop, index) => `${gradientColors[index]} ${stop}%`)
        .join(", ");

      const gradient = `radial-gradient(${width}% ${width + topOffset}% at 50% 20%, ${gradientStopsString})`;

      if (containerRef.current) {
        containerRef.current.style.background = gradient;
      }

      animationFrame = requestAnimationFrame(animateGradient);
    };

    animationFrame = requestAnimationFrame(animateGradient);

    return () => cancelAnimationFrame(animationFrame);
  }, [startingGap, Breathing, gradientColors, gradientStops, animationSpeed, breathingRange, topOffset]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: { duration: 2, ease: [0.25, 0.1, 0.25, 1] },
      }}
      className={`absolute inset-0 overflow-hidden ${containerClassName}`}
    >
      <div ref={containerRef} style={containerStyle} className="absolute inset-0 transition-transform" />
    </motion.div>
  );
}
