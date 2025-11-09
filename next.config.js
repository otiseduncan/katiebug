
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // ✅ tells Next.js to statically export
  distDir: 'out',            // ✅ makes the output folder match Netlify’s publish dir
  reactStrictMode: true,
};

module.exports = nextConfig;
