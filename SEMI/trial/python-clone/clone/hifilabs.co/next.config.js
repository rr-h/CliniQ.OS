// next.config.js
module.exports = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
        if (!isServer) {
            // Fix for `(typeof window !== "undefined" ? window : this) is not defined` error in SSR
            config.resolve.alias['@emotion/is-prop-valid'] = require.resolve('@emotion/is-prop-valid');
        }
        return config;
    },
};