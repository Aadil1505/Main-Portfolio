/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'placehold.co',
            port: '',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'aadil-alli.vercel.app',
            port: '',
            pathname: '**',
          },
        ],
        unoptimized: true,
      },
};

export default nextConfig;
