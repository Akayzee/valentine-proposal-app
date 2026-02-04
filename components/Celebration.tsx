import { CONFIG } from "@/lib/config";
import Image from "next/image";

export default function Celebration() {
  return (
    <div className="text-center animate-fade-in px-2">
      <div className="relative mb-6">
        <Image
          src="/images/wifey/wifey3.jpg"
          alt={CONFIG.image.imageAltText}
          height={300}
          width={300}
          className="object-cover mx-auto rounded-lg"
        />
      </div>

      <h2
        className="font-dancing text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4"
        style={{ color: CONFIG.colors.textColor }}
      >
        {CONFIG.celebration.title}
      </h2>
      <p className="text-base sm:text-lg lg:text-[1.3rem] my-3 sm:my-4 text-[#333]">
        {CONFIG.celebration.message}
      </p>
      <div className="text-3xl sm:text-4xl lg:text-5xl animate-bounce-slow">
        {CONFIG.celebration.emojis}
      </div>
    </div>
  );
}
