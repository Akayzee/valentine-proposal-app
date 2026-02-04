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
        className="font-poppins text-lg sm:text-xl lg:text-2xl xl:text-3xl mb-2 sm:mb-4 px-2"
        style={{ color: CONFIG.colors.textColor }}
      >
        {CONFIG.questions.second.text}
      </h2>
      <p className="font-dancing text-md sm:text-lg lg:text-xl xl:text-2xl bg-gradient-to-r from-purple-600 to-red-400 bg-clip-text text-transparent mb-2 sm:mb-4 px-2">
        {CONFIG.questions.second.subText}...
      </p>

      <div className="relative w-full my-4 sm:my-5 overflow-visible py-2.5">
        <div
          className="text-base sm:text-lg lg:text-xl my-3 sm:my-4 transition-all duration-300 flex justify-center items-center flex-wrap gap-2 sm:gap-2.5 px-2"
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
            <span className="inline-block font-bold animate-bounce-slow ml-2 sm:ml-2.5 text-sm sm:text-base">
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
        className="border-none px-4 py-2 sm:px-5 sm:py-2.5 mx-1 sm:mx-2.5 rounded-[20px] text-white text-base sm:text-lg cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95"
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
