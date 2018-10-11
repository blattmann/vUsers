const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')

module.exports = {
  // baseUrl for github pages. comment to keep the default baseUrl ("/")
  baseUrl: '/vUsers/',

  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // mutate config for production...
    } else {
      // mutate for development..
      return {
        plugins: [
          new ProgressBarPlugin(),
          new WebpackNotifierPlugin({
            title: 'Stefan Blattmann Software Solutions',
            alwaysNotify: true
          })
        ]
      }
    }
  },

  lintOnSave: undefined
}
