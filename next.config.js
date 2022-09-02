/** @type {import('next').NextConfig} */
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
      "image8.coupangcdn.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/products",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
