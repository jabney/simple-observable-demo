let webpackMerge = require('webpack-merge')
let path = require('path')
let cfgExtend = require('./cfg-extend')
let common = require('./webpack.common.js')

cfgExtend('./tsconfig.json', './tsconfig-jit.json', {
  files: [
    "./client/main-jit.ts"
  ]
})

module.exports = webpackMerge(common.client, {

  // devtool: 'cheap-module-eval-source-map',
  devtool: 'source-map',

  entry: {
    app: './client/main-jit.ts',
    polyfill: './client/polyfills.ts',
    vendor: './client/vendor.ts'
  },

  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, '../dist')
  },

  module: {
    rules: [
      {
        test: /.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {}
      },
      {
        test: /.ts$/,
        use: [{
          loader: 'awesome-typescript-loader',
          options: { configFileName: './tsconfig-jit.json' }
        },
        {
          loader: 'angular2-template-loader'
        }]
      },
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 8080,
    historyApiFallback: true
  },

  plugins: [
  ]
})
