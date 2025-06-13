import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unavatar.io",
        port: "",
        pathname: "/**", 
      },
    ],
  },
};

export default nextConfig;
