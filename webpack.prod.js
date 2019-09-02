const merge = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge.smart(common, {
  mode: 'production',
  devtool: 'none',
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    sideEffects: false,
    splitChunks: {
      chunks: 'all',
      minChunks: 1,
      minSize: 50000,
      maxSize: 350000,
      cacheGroups: {
        vendors: {
          name(module, chunks, cacheGroupKey) {
            const moduleFileName = module
              .identifier()
              .split('/')
              .reduceRight(item => item)

            return `${moduleFileName}-${cacheGroupKey}`
          }
        }
      }
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.[contentHash].js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: true,
            removeComments: false,
            collapseWhitespace: false
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Svelte Gram Dev',
      favicon: './src/media/favicon.png'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: 'main.[hash].css',
      chunkFilename: '[name].[hash].css',
      ignoreOrder: false // Enable to remove warnings about conflicting order,
    })
  ]
})
