"use client";

import { useState, useCallback, useMemo } from "react";
import { CONFIG } from "@/lib/config";
import { Next } from "@/lib/types";
import { Position } from "@/lib/types";
import HintButton from "./HintButton";

export default function Question1({ onNext }: Next) {
  const [noButtonPosition, setNoButtonPosition] = useState<Position | null>(
    null
  );

  const baseButtonStyle = useMemo(
    () => ({
      backgroundColor: CONFIG.colors.buttonBackground,
    }),
    []
  );

  const hoverButtonStyle = useMemo(
    () => ({
      backgroundColor: CONFIG.colors.buttonHover,
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

  return (
    <div className="min-h-[200px] flex flex-col items-center gap-4 sm:gap-6">
      <h2
        className="font-poppins text-lg sm:text-xl lg:text-2xl px-2"
        style={{ color: CONFIG.colors.textColor }}
      >
        {CONFIG.questions.first.text}
      </h2>
      <div className="flex gap-2 sm:gap-3 items-center flex-wrap justify-center">
        <button
          className="border-none px-4 py-2 sm:px-5 sm:py-2.5 mx-1 sm:mx-2.5 rounded-[20px] text-white text-base sm:text-lg cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95"
          style={{
            ...baseButtonStyle,
            ...hoverButtonStyle,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = CONFIG.colors.buttonHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor =
              CONFIG.colors.buttonBackground;
          }}
          onClick={onNext}
        >
          {CONFIG.questions.first.yesBtn}
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
          {CONFIG.questions.first.noBtn}
        </button>
      </div>

      <HintButton onNext={onNext} />
    </div>
  );
}
