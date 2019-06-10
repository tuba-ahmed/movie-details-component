const HTMLWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    module : {
        rules: [{
          test: /\.html?$/,
          exclude: /node_modules/,
          loader: 'html-loader'
        },
          {
          test: /\.js?$/,
          exclude : /node_modules/,
          loader: 'babel-loader',
          //this is where we define our presets
          query: {
            presets:['@babel/preset-env', '@babel/preset-react']
          }
        }]
    },
    plugins: [
      new HTMLWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"}
      )
    ],
    mode: 'development'
  }