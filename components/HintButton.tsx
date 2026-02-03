import { CONFIG } from "@/lib/config";
import { Next } from "@/lib/types";

const HintButton = ({ onNext }: Next) => {
  return (
    <div
      className="fixed bottom-5 right-5 mt-0 opacity-40 transition-opacity duration-300 scale-[0.7] z-20 animate-subtle-hint hover:opacity-100 hover:animate-none md:bottom-3 md:right-3 sm:scale-[0.6]"
      style={{ animationDelay: "5s" }}
    >
      <button
        className="text-sm md:text-md px-2.5 py-1.5 border-none rounded-[20px] text-white cursor-pointer animate-pulse-slow transition-transform hover:scale-105 active:scale-95"
        style={{ background: "linear-gradient(45deg, #ff6b6b, #feca57)" }}
        onClick={onNext}
      >
        {CONFIG.questions.first.secretAnswer}
      </button>
    </div>
  );
};
export default HintButton;
