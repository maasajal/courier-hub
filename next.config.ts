/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for static export if you're using the Next.js Image component
  },
};

module.exports = nextConfig;
