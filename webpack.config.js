const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");

const ENV = process.env.NODE_ENV;
const PROD = ENV === "production";
const PUBLIC_PATH = "public";
const SRC_PATH = "src";

module.exports = {
  mode: PROD ? "production" : "development",
  devtool: PROD && "inline-source-map",
  entry: [path.resolve(SRC_PATH, "index.js")],
  output: {
    path: path.resolve(PUBLIC_PATH),
    filename: PROD ? "[name].[hash].js" : "[name].js",
    publicPath: "/assets/",
  },
  module: {
    rules: [
      {
        test: /\.[tj]s(x?)$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }],
      },
    ],
  },
  optimization: {
    minimize: PROD,
    nodeEnv: ENV,
    mergeDuplicateChunks: true,
    splitChunks: {
      chunks: "all",
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "-",
      cacheGroups: {
        vendor: {
          chunks: "initial",
          test: "vendor",
          name: "vendor",
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(SRC_PATH, "templates", "index.html"),
      filename: path.resolve(PUBLIC_PATH, "index.html"),
      minify: true,
      hash: true,
      inject: "body",
      title: "Shopping Cart",
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: "async",
    }),
  ],
  devServer: {
    contentBase: path.resolve(PUBLIC_PATH),
  },
};
