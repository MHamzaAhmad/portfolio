/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable Cache Components (PPR) for better SEO and performance
  cacheComponents: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
