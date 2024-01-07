/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",

        hostname: "**",
      },

      {
        protocol: "http",

        hostname: "**",
      },
    ],
  },
  env: {
    APP_NAME: process.env.APP_NAME,
  },
};

module.exports = nextConfig;
