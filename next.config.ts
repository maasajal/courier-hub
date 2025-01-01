import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // Enable static export
  reactStrictMode: true, // Optional: Keeps React in strict mode
  images: {
    unoptimized: true, // Disable image optimization for static exports
  },
};

export default nextConfig;
