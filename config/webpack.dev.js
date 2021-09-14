const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  node: {
    fs: "empty",
  },
  entry: {
    main: "./src/index.js",
    signIn: "./src/auth/signIn/signIn.js",
    reset: "./src/auth/reset/reset.js",
    signUp: "./src/auth/signUp/signUp.js",
    ssoLogin: "./src/auth/ssoLogin/ssoLogin.js",
    dashboard: "./src/templates/dashboard/dashboard.js",
    profile: "./src/profile/profile/profile.js",
    billing: "./src/profile/billing/billing.js",
    dataConnections: "./src/profile/dataConnections/dataConnections.js",
    heatmap: "./src/demos/heatmap/heatmap.js",
    teamScorecard: "./src/demos/teamScorecard/teamScorecard.js",
  },
  output: {
    path: path.join(__dirname, "../build"),
    filename: "[name].bundle.js",
  },
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "../build"),
    compress: true,
    port: 3000,
    overlay: true,
  },
  devtool: "cheap-module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // transpiling our JavaScript files using Babel and webpack
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "postcss-loader", // Loader for webpack to process CSS with PostCSS
          "sass-loader", // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader", // This will resolves import/require() on a file into a url and emits the file into the output directory.
            options: {
              name: "[name].[ext]",
              outputPath: "assets/",
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: {
            attrs: ["img:src", ":data-src"],
            minimize: true,
          },
        },
      },
    ],
  },
  plugins: [
    // CleanWebpackPlugin will do some clean up/remove folder before build
    // In this case, this plugin will remove 'dist' and 'build' folder before re-build again
    new CleanWebpackPlugin(),
    // The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/auth/signIn/signIn.html",
      inject: true,
      chunks: ["signIn"],
      filename: "signIn.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/auth/reset/reset.html",
      inject: true,
      chunks: ["reset"],
      filename: "reset.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/auth/signUp/signUp.html",
      inject: true,
      chunks: ["signUp"],
      filename: "signUp.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/auth/ssoLogin/ssoLogin.html",
      inject: true,
      chunks: ["ssoLogin"],
      filename: "ssoLogin.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/dashboard/dashboard.html",
      inject: true,
      chunks: ["dashboard"],
      filename: "dashboard.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/profile/profile/profile.html",
      inject: true,
      chunks: ["profile"],
      filename: "profile.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/profile/billing/billing.html",
      inject: true,
      chunks: ["billing"],
      filename: "billing.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/profile/dataConnections/dataConnections.html",
      inject: true,
      chunks: ["dataConnections"],
      filename: "dataConnections.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/demos/heatmap/heatmap.html",
      inject: true,
      chunks: ["heatmap"],
      filename: "heatmap.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/demos/teamScorecard/teamScorecard.html",
      inject: true,
      chunks: ["teamScorecard"],
      filename: "teamScorecard.html",
    }),
  ],
};
