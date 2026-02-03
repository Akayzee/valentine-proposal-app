"use client";

import { useEffect } from "react";
import { CONFIG } from "@/lib/config";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Apply CSS variables for animations using React's effect hook
    const root = document.documentElement;
    root.style.setProperty("--float-duration", CONFIG.animations.floatDuration);
    root.style.setProperty("--float-distance", CONFIG.animations.floatDistance);
    root.style.setProperty("--bounce-speed", CONFIG.animations.bounceSpeed);
  }, []);

  return <>{children}</>;
}
