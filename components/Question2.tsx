"use client";

import { useState, useCallback, useMemo } from "react";
import { CONFIG } from "@/lib/config";

export default function Question2({ onNext }: { onNext: () => void }) {
  const [loveValue, setLoveValue] = useState(100);

  const baseButtonStyle = useMemo(
    () => ({
      backgroundColor: CONFIG.colors.buttonBackground,
    }),
    []
  );

  const handleSliderChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoveValue(parseInt(e.target.value, 10));
    },
    []
  );

  const extraLoveMessage = useMemo(() => {
    if (loveValue > 5000) return CONFIG.loveMessages.extreme;
    if (loveValue > 1000) return CONFIG.loveMessages.high;
    if (loveValue > 100) return CONFIG.loveMessages.normal;
    return "";
  }, [loveValue]);

  return (
    <div className="min-h-[200px]">
      <h2
        className="font-poppins text-3xl mb-6 md:text-2xl sm:text-xl"
        style={{ color: CONFIG.colors.textColor }}
      >
        {CONFIG.questions.second.text}
      </h2>

      <div className="relative w-full my-5 overflow-visible py-2.5">
        <div
          className="text-xl my-4 transition-all duration-300 flex justify-center items-center flex-wrap gap-2.5 md:text-lg sm:text-base"
          style={{ color: CONFIG.colors.textColor }}
        >
          <span>{CONFIG.questions.second.startText}</span>
          <span
            className="font-bold"
            style={{ color: CONFIG.colors.textColor }}
          >
            {loveValue}%
          </span>
          {extraLoveMessage && (
            <span className="inline-block font-bold animate-bounce-slow ml-2.5">
              {extraLoveMessage}
            </span>
          )}
        </div>

        <input
          type="range"
          min="0"
          max="10000"
          value={loveValue}
          className="love-slider w-full h-[15px] rounded-[10px] outline-none opacity-90 hover:opacity-100 transition-opacity duration-200"
          onChange={handleSliderChange}
          aria-label="Love meter"
        />
      </div>

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
        onClick={onNext}
      >
        {CONFIG.questions.second.nextBtn}
      </button>
    </div>
  );
}
