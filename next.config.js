/** @type {import('next').NextConfig} */
// const nextConfig = {}

const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/(.*)',
          destination: 'http://localhost:8080',
        },
      ]
    },
  };
  

module.exports = nextConfig
