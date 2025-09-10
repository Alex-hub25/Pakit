const path = require("path");
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Add support for importing SVGs as React components
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
          },
        },
      ],
    });

    return config;
  },

  // Amplify sometimes misdetects the project root if multiple lockfiles exist
  experimental: {
    outputFileTracingRoot: path.join(__dirname),
  },

  // Disable Next.js telemetry in builds
  telemetry: false,

  // Use static image handling (Amplify doesn’t support default Next.js image optimizer)
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
