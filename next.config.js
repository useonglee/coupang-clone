/** @type {import('next').NextConfig} */
const withInterceptStdout = require("next-intercept-stdout");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  images: {
    domains: [
      "thumbnail6.coupangcdn.com",
      "thumbnail7.coupangcdn.com",
      "thumbnail8.coupangcdn.com",
      "thumbnail9.coupangcdn.com",
      "thumbnail10.coupangcdn.com",
      "image6.coupangcdn.com",
      "image7.coupangcdn.com",
      "image8.coupangcdn.com",
      "img1a.coupangcdn.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/cart",
        permanent: true,
      },
    ];
  },
};

module.exports = withInterceptStdout(nextConfig, (text) =>
  text.includes("Duplicate atom key") ? "" : text
);
