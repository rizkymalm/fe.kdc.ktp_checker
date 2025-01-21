/** @type {import('next').NextConfig} */
const nextConfig = {
    output: process.env.NODE_ENV === 'production' ? 'standalone' : undefined,
    productionBrowserSourceMaps: false,
    eslint: {
        dirs: ['src', 'test'],
    },
    images: {
        domains: [
            'dev-kadence-internal-tools.s3.ap-southeast-3.amazonaws.com',
            'kadence-internal-tools.s3.ap-southeast-3.amazonaws.com',
        ],
    },
};

export default nextConfig;
