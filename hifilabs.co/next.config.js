module.exports = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    if (dev) {
      config.resolve.alias = {
        ...config.resolve.alias,
        react: 'react/cjs/react.development.js',
        'react-dom': 'react-dom/cjs/react-dom.development.js'
      };
    }
    return config;
  }
};
