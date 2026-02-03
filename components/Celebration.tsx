import { CONFIG } from "@/lib/config";

export default function Celebration() {
  return (
    <div className="text-center animate-fade-in">
      <h2
        className="font-dancing text-5xl mb-4 md:text-4xl sm:text-3xl"
        style={{ color: CONFIG.colors.textColor }}
      >
        {CONFIG.celebration.title}
      </h2>
      <p className="text-[1.3rem] my-4 text-[#333] md:text-xl sm:text-lg">
        {CONFIG.celebration.message}
      </p>
      <div className="text-5xl animate-bounce-slow md:text-4xl sm:text-3xl">
        {CONFIG.celebration.emojis}
      </div>
    </div>
  );
}
