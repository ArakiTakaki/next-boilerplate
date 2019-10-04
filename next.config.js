const withTypescript = require('@zeit/next-typescript')

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const withSass = require('@zeit/next-sass')

module.exports = withSass(withTypescript({
  cssModules: true,
  webpack(config, options) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': './src',
      'style': './assets/style'
    }
    // typetyeckする
    if (options.isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin())
    }

    return config;
  }
}));
