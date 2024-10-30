/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'https://s3-inventotrack.s3.ap-southeast-1.amazonaws.com',
                port: "",
                pathname: '/**',
            },
        ]
    }
};

export default nextConfig;
