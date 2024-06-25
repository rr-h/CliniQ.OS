module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks.cacheGroups.commons.minChunks = 2;
    }
    return config;
  }
};
