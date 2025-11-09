
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // static HTML export
  distDir: 'out',
  reactStrictMode: true,
  images: {
    unoptimized: true,       // ✅ disables incompatible Image optimization
  },
};

module.exports = nextConfig;
