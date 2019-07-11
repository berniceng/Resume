const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: "source-map",
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif|woff|eot)$/,
        use: 'file-loader'
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              compact: true,
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          { 
            loader: 'css-loader', 
            options: { 
              modules: true
            }
          },
          { 
            loader: 'sass-loader', 
            options: { 
              sourceMap: true,
              modules: true, 
              localIdentName: "[name]__local]__[hash:base64:5]"
            }
          }
        ]
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
              loader: "ts-loader"
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx', '.scss', '.eot', 'woff']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'app_bundle.js'
  },
  plugins: [
    new CopyPlugin([{
      from: './*.html'
    }])
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};