const withTypescript = require('@zeit/next-typescript')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const withSass = require('@zeit/next-sass')
const withCSS = require("@zeit/next-css");

let app = withTypescript({
  webpack(config, options) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': './',
      'style': './assets/style'
    }
    // typetyeckする
    if (options.isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin())
    }

    return config;
  }
})
app = withCSS({
  cssModules: true,
  ...app,
});
app = withSass({
  cssModules: true,
  ...app
})

module.exports = app;
