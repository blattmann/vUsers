const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')
const path = require('path')

module.exports = {
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       data: `@import "@/sass/main.scss";`
  //     }
  //   }
  // },
  // output directory for github pages. comment to keep the default directory ("dist")
  outputDir: path.resolve(__dirname, './docs/'),

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
