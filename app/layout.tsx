import type { Metadata } from "next";
import { Dancing_Script, Poppins } from "next/font/google";
import "./globals.css";
import { CONFIG } from "@/lib/config";

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
        className={`${dancingScript.variable} ${poppins.variable} font-poppins`}
        style={{
          background: `linear-gradient(135deg, ${CONFIG.colors.backgroundStart}, ${CONFIG.colors.backgroundEnd})`,
        }}
      >
        {children}
      </body>
    </html>
  );
}
