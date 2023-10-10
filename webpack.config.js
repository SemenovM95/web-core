const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const mode = process.env.NODE_ENV || 'development'
const devMode = mode === 'development'
const target = devMode ? 'web' : 'browserslist'
const devtool = devMode ? 'source-map' : false

module.exports = {
  mode,
  target,
  devtool,
  devServer: {
    hot: true
  },
  entry: path.resolve(__dirname, 'src', 'main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: 'index.js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@js': path.resolve(__dirname, 'src', 'js'),
      '@styles': path.resolve(__dirname, 'src', 'styles'),
      '@public': path.resolve(__dirname, 'public')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ['html-loader']
      },
      {
        test: /\.(c|sc|sa)ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env']
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.woff2?$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      },
      {
        test: /\.(jpe?g|png|webp|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
      },
      {
        test: /\.(m|c)?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'ie 11' }]]
          }
        }
      }
    ]
  }
}
