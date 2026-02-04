import { CONFIG } from "@/lib/config";
import { Next } from "@/lib/types";

const HintButton = ({ onNext }: Next) => {
  return (
    <div
      className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 mt-0 opacity-40 transition-opacity duration-300 scale-[0.55] sm:scale-[0.65] lg:scale-[0.7] z-20 animate-subtle-hint hover:opacity-100 hover:animate-none"
      style={{ animationDelay: "5s" }}
    >
      <button
        className="text-xs sm:text-sm px-2 py-1.5 sm:px-2.5 border-none rounded-[20px] text-white cursor-pointer animate-pulse-slow transition-transform hover:scale-105 active:scale-95"
        style={{ background: "linear-gradient(45deg, #ff6b6b, #feca57)" }}
        onClick={onNext}
      >
        {CONFIG.questions.first.secretAnswer}
      </button>
    </div>
  );
};
export default HintButton;
