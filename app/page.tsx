"use client";

import { useState } from "react";
import { CONFIG } from "@/lib/config";
import FloatingElements from "@/components/FloatingElements";
import MusicPlayer from "@/components/MusicPlayer";
import Question1 from "@/components/Question1";
import Question2 from "@/components/Question2";
import Question3 from "@/components/Question3";
import Celebration from "@/components/Celebration";
import ThemeProvider from "@/components/ThemeProvider";

const HomePage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [showCelebration, setShowCelebration] = useState(false);

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  const handleCelebration = () => {
    setShowCelebration(true);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex justify-center items-center overflow-x-hidden p-3 sm:p-5">
        <FloatingElements showExplosion={showCelebration} />

        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 bg-white/90 p-5 sm:p-6 lg:p-8 rounded-[20px] shadow-[0_0_20px_rgba(0,0,0,0.1)] text-center w-full max-w-[95%] sm:max-w-[85%] md:max-w-[600px] lg:max-w-[500px] mx-auto relative z-10">
          {CONFIG.music.enabled && <MusicPlayer />}
          <h1
            className="font-dancing text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 lg:mb-8"
            style={{ color: CONFIG.colors.textColor }}
          >
            My {CONFIG.valentineName},
          </h1>

          {!showCelebration && (
            <>
              {currentQuestion === 1 && (
                <Question1 onNext={handleNextQuestion} />
              )}
              {currentQuestion === 2 && (
                <Question2 onNext={handleNextQuestion} />
              )}
              {currentQuestion === 3 && <Question3 onYes={handleCelebration} />}
            </>
          )}

          {showCelebration && <Celebration />}
        </div>
      </div>
    </ThemeProvider>
  );
};
export default HomePage;
