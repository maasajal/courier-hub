/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: {
    serverActions: true, // Enable Server Actions if needed
  },
  images: {
    unoptimized: true, // Required for static export if you're using the Next.js Image component
  },
};

module.exports = nextConfig;
