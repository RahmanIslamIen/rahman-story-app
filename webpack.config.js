const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: "/index.html" },
        { from: /tambah-story.html/, to: "/tambah-story.html" },
        { from: /./, to: "/404.html" },
      ],
    },
  },
  mode: "development",
  entry: "./index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              [
                "@babel/plugin-proposal-decorators",
                { decoratorsBeforeExport: true },
              ],
              ["@babel/plugin-proposal-class-properties", { loose: true }],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /bootstrap\.js$/,
        use: {
          loader: "imports-loader",
          options: {
            jQuery: "jquery",
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunksSortMode: "none",
      template: "index.html",
    }),
    new HtmlWebpackPlugin({
      chunksSortMode: "none",
      filename: "tambah-story.html",
      template: "tambah-story.html",
    }),
  ],
};
