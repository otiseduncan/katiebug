
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // replaces `next export`
    images: { unoptimized: true }, // prevent Netlify image optimizer errors
};

module.exports = nextConfig;