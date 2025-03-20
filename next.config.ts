/** @type {import('next').NextConfig} */
const basePath : string = process.env.NEXT_BASE_PATH ?? '';

const nextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
    },
};

module.exports = nextConfig;