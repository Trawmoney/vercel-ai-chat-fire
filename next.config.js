/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  // other configurations...
  async rewrites() {
    return [
      { source: '/api/commands', destination: '/api/commands.js' },
    ];
  },
};
