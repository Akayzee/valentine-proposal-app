"use client";

import { useState, useCallback, useMemo } from "react";
import confetti from "canvas-confetti";
import { CONFIG } from "@/lib/config";
import { Position } from "@/lib/types";
import { Yes } from "@/lib/types";

export default function Question3({ onYes }: Yes) {
  const [noButtonPosition, setNoButtonPosition] = useState<Position | null>(
    null
  );

  const baseButtonStyle = useMemo(
    () => ({
      backgroundColor: CONFIG.colors.buttonBackground,
    }),
    []
  );

  const getRandomPosition = useCallback((): Position => {
    const maxWidth =
      typeof window !== "undefined" ? window.innerWidth - 150 : 0;
    const maxHeight =
      typeof window !== "undefined" ? window.innerHeight - 50 : 0;

    // Ensure position is within safe bounds (at least 10px from edges)
    const minLeft = 10;
    const minTop = 10;

    return {
      left: `${Math.max(minLeft, Math.min(maxWidth - minLeft, Math.random() * maxWidth))}px`,
      top: `${Math.max(minTop, Math.min(maxHeight - minTop, Math.random() * maxHeight))}px`,
    };
  }, []);

  const moveNoButton = useCallback(() => {
    setNoButtonPosition(getRandomPosition());
  }, [getRandomPosition]);

  const handleYesClick = useCallback(() => {
    // Trigger confetti explosion
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 30, // Initial speed of confetti particles
      spread: 360, // Full circle spread (360 degrees)
      ticks: 60, // Number of animation frames
      zIndex: 0, // Layer behind modal
    };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // Fire confetti from random positions
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    // Call the original onYes handler
    onYes();
  }, [onYes]);

  return (
    <div className="min-h-[200px]">
      <h2
        className="font-poppins text-lg sm:text-xl lg:text-2xl xl:text-3xl mb-4 sm:mb-6 px-2"
        style={{ color: CONFIG.colors.textColor }}
      >
        {CONFIG.questions.third.text}
      </h2>

      <button
        className="border-none px-4 py-2 sm:px-5 sm:py-2.5 mx-1 sm:mx-2.5 rounded-[20px] text-white text-base sm:text-lg cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95"
        style={baseButtonStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = CONFIG.colors.buttonHover;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor =
            CONFIG.colors.buttonBackground;
        }}
        onClick={handleYesClick}
      >
        {CONFIG.questions.third.yesBtn}
      </button>

      <button
        className="border-none px-4 py-2 sm:px-5 sm:py-2.5 mx-1 sm:mx-2.5 rounded-[20px] text-white text-base sm:text-lg cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95"
        style={{
          ...baseButtonStyle,
          ...(noButtonPosition
            ? { position: "fixed", ...noButtonPosition }
            : {}),
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = CONFIG.colors.buttonHover;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor =
            CONFIG.colors.buttonBackground;
        }}
        onClick={moveNoButton}
      >
        {CONFIG.questions.third.noBtn}
      </button>
    </div>
  );
}
