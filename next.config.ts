import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'kjayxhdxemst85ys.public.blob.vercel-storage.com',
                pathname: '/**', // permite qualquer imagem dentro do domínio
            },
        ],
    },
};

export default nextConfig;
