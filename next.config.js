/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.aesop.com",
      },
    ],
    domains: ["fimgs.net"],
  },
};

module.exports = nextConfig;
