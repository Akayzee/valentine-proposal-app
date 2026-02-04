import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**", // Tillater alle bilder fra din Cloudinary-konto
      },
    ],
  },
};

export default nextConfig;
