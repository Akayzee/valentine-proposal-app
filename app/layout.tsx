import type { Metadata } from "next";
import { Dancing_Script, Poppins } from "next/font/google";
import "./globals.css";
import { CONFIG } from "@/lib/config";
import ThemeProvider from "@/components/ThemeProvider";
import Image from "next/image";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing-script",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: CONFIG.pageTitle,
  description: "A special Valentine's Day proposal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${dancingScript.variable} ${poppins.variable} font-poppins font-dancing`}
      >
        <div className="fixed inset-0 w-full h-full -z-10 min-h-screen">
          <Image
            src="/images/bg-image.jpg"
            alt=""
            fill
            priority
            className="object-cover blur-xs"
          />
        </div>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
