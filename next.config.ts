/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc", // 👈 your external domain
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com", // example extra domain if needed
      },
    ],
  },
};

module.exports = nextConfig;
