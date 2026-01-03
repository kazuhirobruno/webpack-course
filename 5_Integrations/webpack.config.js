const path = require("path");

module.exports = {
  entry: "./src/index.js", //entrada do arquivo
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      {
        test: /\.(ttf|woff)$/,
        use: "url-loader",
      },
    ],
  },
};
