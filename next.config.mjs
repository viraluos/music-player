/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ttutdlqfdrilixvvnvzo.supabase.co',
                port: '',
                pathname: '/storage/v1/object/public/images/**',
            },
        ],
    },
};

export default nextConfig;
