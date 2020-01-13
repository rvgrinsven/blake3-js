const webpack = require("webpack");
module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js"]
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "main.js",
    library: "blake3-js",
    libraryTarget: "commonjs-module"
  }
};
