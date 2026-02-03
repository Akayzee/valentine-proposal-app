"use client";

import { useState, useCallback, useMemo } from "react";
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

    return {
      left: `${Math.random() * maxWidth}px`,
      top: `${Math.random() * maxHeight}px`,
    };
  }, []);

  const moveNoButton = useCallback(() => {
    setNoButtonPosition(getRandomPosition());
  }, [getRandomPosition]);

  return (
    <div className="min-h-[200px]">
      <h2
        className="font-poppins text-3xl mb-6 md:text-2xl sm:text-xl"
        style={{ color: CONFIG.colors.textColor }}
      >
        {CONFIG.questions.third.text}
      </h2>

      <button
        className="border-none px-5 py-2.5 mx-2.5 rounded-[20px] text-white text-lg cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 md:text-base sm:px-4 sm:py-2"
        style={baseButtonStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = CONFIG.colors.buttonHover;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor =
            CONFIG.colors.buttonBackground;
        }}
        onClick={onYes}
      >
        {CONFIG.questions.third.yesBtn}
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
        {CONFIG.questions.third.noBtn}
      </button>
    </div>
  );
}
