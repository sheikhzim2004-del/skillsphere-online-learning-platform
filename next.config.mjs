/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

// "image": "https://res.cloudinary.com/dohwbopqu/image/upload/q_auto/f_auto/v1778397821/web-dev_sobfgk.jpg",
