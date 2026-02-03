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
      <div className="min-h-screen flex justify-center items-center overflow-x-hidden p-5">
        <FloatingElements showExplosion={showCelebration} />

        <div className="flex flex-col gap-10 bg-white/90 p-8 rounded-[20px] shadow-[0_0_20px_rgba(0,0,0,0.1)] text-center w-1/3 mx-5 relative z-10">
          {CONFIG.music.enabled && <MusicPlayer />}
          <h1
            className="font-dancing text-5xl mb-8 md:text-6xl sm:text-3xl"
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
