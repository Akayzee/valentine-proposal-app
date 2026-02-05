"use client";

import { useState, useEffect, useMemo } from "react";
import { CONFIG } from "@/lib/config";
import { FloatingElement } from "@/lib/types";

const generateRandomElement = (id: string, emoji: string): FloatingElement => {
  return {
    id,
    emoji,
    style: {
      left: `${Math.random() * 100}vw`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${10 + Math.random() * 20}s`,
    },
  };
};

export default function FloatingElements({
  showExplosion,
}: {
  showExplosion: boolean;
}) {
  // Generate initial elements using useMemo to avoid regeneration on re-renders
  const initialElements = useMemo(() => {
    const elements: FloatingElement[] = [];

    // Create hearts
    CONFIG.floatingEmojis.hearts.forEach((heart, index) => {
      elements.push(generateRandomElement(`heart-${index}`, heart));
    });

    // Create bears
    CONFIG.floatingEmojis.bears.forEach((bear, index) => {
      elements.push(generateRandomElement(`bear-${index}`, bear));
    });

    return elements;
  }, []);

  const [elements, setElements] = useState<FloatingElement[]>(initialElements);

  // Handle explosion effect
  useEffect(() => {
    if (showExplosion) {
      const explosionElements: FloatingElement[] = [];

      for (let i = 0; i < 20; i++) {
        const randomHeart =
          CONFIG.floatingEmojis.hearts[
            Math.floor(Math.random() * CONFIG.floatingEmojis.hearts.length)
          ];

        explosionElements.push({
          id: `explosion-${i}`,
          emoji: randomHeart,
          style: {
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${5 + Math.random() * 10}s`,
          },
        });
      }

      setElements((prev) => [...prev, ...explosionElements]);
    }
  }, [showExplosion]);

  return (
    <div className="fixed w-full h-full pointer-events-none z-[1] top-0 left-0">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute text-2xl sm:text-3xl lg:text-4xl animate-float"
          style={element.style}
        >
          {element.emoji}
        </div>
      ))}
    </div>
  );
}
