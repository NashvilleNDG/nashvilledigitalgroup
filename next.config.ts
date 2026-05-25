import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // All pages are SSR by default in the App Router.
  // Setting this explicitly ensures no accidental static export slips through.
  output: undefined,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Tell crawlers not to index _next/static assets
          { key: "X-Robots-Tag", value: "all" },
          // Allow AI training bots (GPTBot, ClaudeBot, etc.) — remove if you want to block them
          // via robots.txt instead of HTTP headers
        ],
      },
    ];
  },
};

export default nextConfig;
