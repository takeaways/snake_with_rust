const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./bootstrap.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bootstrap.js",
  },
  mode: "development",
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "wasm", to: "wasm" },
        { from: "favicon.ico", to: "favicon.ico" },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.relative(__dirname, "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  //dev server settings
  devServer: {
    port: process.env.PORT,
  },
};
