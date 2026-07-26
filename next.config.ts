import type { NextConfig } from "next";

/**
 * Security headers (10-quality-and-launch.md §3) are set here, statically,
 * rather than via a per-request nonce in proxy.ts. Next.js nonce-based CSP
 * requires every page to opt into dynamic rendering ("Static pages are
 * generated at build time, when no request or response headers exist — so
 * no nonce can be injected" — Next.js CSP guide) which directly conflicts
 * with this project's Pure SSG architecture (08-technical.md §1: "every
 * page statically generated at build"). A static CSP (no nonce/
 * strict-dynamic, `'unsafe-inline'` on script-src) is the officially
 * documented approach for apps that don't use nonces, and is what keeps
 * every page a static build output. `'unsafe-inline'` on scripts is a
 * known, accepted trade-off here — `object-src 'none'`, `base-uri 'self'`
 * and `frame-ancestors 'none'` still meaningfully constrain the rest.
 */
const isDev = process.env.NODE_ENV === "development";

const cspDirectives = [
  `default-src 'self'`,
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  `style-src 'self' 'unsafe-inline'`,
  `img-src 'self' blob: data: https:`,
  `font-src 'self'`,
  `frame-src https://www.youtube-nocookie.com https://player.vimeo.com https://challenges.cloudflare.com`,
  `connect-src 'self' https://www.google-analytics.com https://challenges.cloudflare.com`,
  `object-src 'none'`,
  `base-uri 'self'`,
  `form-action 'self'`,
  `frame-ancestors 'none'`,
  `upgrade-insecure-requests`,
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: cspDirectives.join("; ") },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
