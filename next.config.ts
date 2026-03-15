import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.resolve.alias['@public'] = require('path').join(__dirname, 'public');
    return config;
  },
};

export default nextConfig;
