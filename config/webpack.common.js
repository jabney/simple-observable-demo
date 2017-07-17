const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
  client: {

    resolve: {
      extensions: ['.ts', '.js']
    },

    module: {
      rules: [{
        test: /\/index\.html$/,
        use: 'html-loader?interpolate=require'
      },
      {
        test: /.component.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: 'file-loader?name=images/[name].[hash:12].[ext]',
      },
      {
        test: /\.scss$/,
        exclude: /\.component\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader', options: {
              sourceMap: true,
              minimize: true
            }
          },
          {
            loader: 'sass-loader', options: {
              sourceMap: true,
              includePaths: [
                path.resolve(__dirname, '../client/scss')
              ]
            }
          }]
        })
      },
      {
        test: /\.component\.scss$/,
        use: [{
          loader: 'raw-loader'
        },
        {
          loader: 'sass-loader', options: {
            sourceMap: true,
            includePaths: [
              path.resolve(__dirname, '../client/scss')
            ]
          }
        }]
      }]
    },

    plugins: [
      // Workaround for angular/angular#11580
      new webpack.ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /angular(\\|\/)core(\\|\/)@angular/,
        path.resolve(__dirname, '../client'), // location of your src
        {} // a map of your routes
      ),

      new webpack.ProvidePlugin({
        // This makes jQuery available to angular.
        'window.jQuery': 'jquery'
      }),

      new webpack.DefinePlugin({
        PRODUCTION: PRODUCTION,
        DEVELOPMENT: !PRODUCTION
      }),

      // https://medium.com/webpack/predictable-long-term-caching-with-webpack-d3eee1d3fa31
      // https://github.com/webpack/webpack/issues/1315
      new webpack.NamedChunksPlugin(),
      new webpack.NamedModulesPlugin(),

      new webpack.optimize.CommonsChunkPlugin({
        name: ['app', 'polyfill', 'vendor']
      }),

      new webpack.optimize.CommonsChunkPlugin({
        name: ['manifest']
      }),

      new ExtractTextPlugin('app.[contentHash].css'),

      new HTMLWebpackPlugin({
        template: './client/index.html',
        filename: 'index.html'
      })
    ]
  }
}
