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

    return {
      left: `${Math.random() * maxWidth}px`,
      top: `${Math.random() * maxHeight}px`,
    };
  }, []);

  const moveNoButton = useCallback(() => {
    setNoButtonPosition(getRandomPosition());
  }, [getRandomPosition]);

  return (
    <div className="min-h-[200px] flex flex-col items-center gap-6">
      <h2
        className="font-poppins text-2xl md:text-3xl sm:text-xl"
        style={{ color: CONFIG.colors.textColor }}
      >
        {CONFIG.questions.first.text}
      </h2>
      <div className="flex gap-3 items-center">
        <button
          className="border-none px-5 py-2.5 mx-2.5 rounded-[20px] text-white text-lg cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 md:text-base sm:px-4 sm:py-2"
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
          className="border-none px-5 py-2.5 mx-2.5 rounded-[20px] text-white text-lg cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 md:text-base sm:px-4 sm:py-2"
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
