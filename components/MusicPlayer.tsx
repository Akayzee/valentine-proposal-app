"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { CONFIG } from "@/lib/config";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Initialize audio on mount
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set volume
    audio.volume = CONFIG.music.volume;

    // Attempt autoplay if enabled
    if (CONFIG.music.autoplay) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, []);

  // Toggle music playback
  const toggleMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [isPlaying]);

  return (
    <div className="mb-3 sm:mb-4">
      <button
        onClick={toggleMusic}
        className="bg-gradient-to-r from-[#667eea] to-[#764ba2] border-none px-3 py-1.5 sm:px-4 sm:py-2 rounded-[20px] text-white text-xs sm:text-sm cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
        aria-label={isPlaying ? "Stop music" : "Play music"}
      >
        {isPlaying ? CONFIG.music.stopText : CONFIG.music.startText}
      </button>
      <audio ref={audioRef} loop>
        <source src={CONFIG.music.musicUrl} type="audio/mpeg" />
      </audio>
    </div>
  );
}
