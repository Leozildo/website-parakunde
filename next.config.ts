import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            new URL('https://kjayxhdxemst85ys.public.blob.vercel-storage.com'),
        ],
    },
};

export default nextConfig;
