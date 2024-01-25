const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    historyApiFallback: true,
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
      // Aturan untuk mengelola file CSS Bootstrap
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // Aturan untuk mengelola file JavaScript Bootstrap
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
  ],
};
