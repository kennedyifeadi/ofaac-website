import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "bp.blogspot.com",
      },
      {
        protocol: "https",
        hostname: "blogger.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
