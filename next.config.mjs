/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/image/upload",
        destination: process.env.NEXT_PUBLIC_IMAGE_UPLOAD_SERVER,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/items',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  },
}



export default nextConfig
