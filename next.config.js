
/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false, os: false, path: false, crypto: false };

        return config;
    }
}
