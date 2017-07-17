const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const ngToolsWebpack = require('@ngtools/webpack')
let path = require('path')
const cfgExtend = require('./cfg-extend')
const common = require('./webpack.common.js')

cfgExtend('./tsconfig.json', './tsconfig-aot.json', {
  files: [
    "./client/app/app.module.ts",
    "./client/main-aot.ts"
  ],
  angularCompilerOptions: {
    "genDir": "./aot",
    "entryModule": "./client/app/app.module#AppModule",
    "skipMetadataEmit": true
  }
})

module.exports = webpackMerge(common.client, {

  devtool: 'source-map',

  entry: {
    app: './client/main-aot.ts',
    polyfill: './client/polyfills.ts',
    vendor: './client/vendor.ts'
  },

  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/simple-observable-demo/dist/'
  },

  module: {
    rules: [
      {
        test: /.ts$/,
        use: '@ngtools/webpack'
      }
    ]
  },

  plugins: [
    new ngToolsWebpack.AotPlugin({
      tsConfigPath: './tsconfig-aot.json'
    }),

    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
        // drop_console: true
      },
      mangle: {
        keep_fnames: true
      }
    }),

    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false // workaround for ng2
      }
    })
  ]
})
