import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.chessable.com",
        pathname: "/img/books/**",
      },
    ],
  },
};

export default nextConfig;
