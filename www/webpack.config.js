const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "index.js",
  },
  mode: "development",
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "wasm", to: "wasm" }],
    }),
    new HtmlWebpackPlugin({
      template: path.relative(__dirname, "index.html"),
    }),
  ],

  //dev server settings
  devServer: {
    port: process.env.PORT,
  },
};
