const path = require("path");

module.exports = {
  entry: "./src/teste.js", //entrada do arquivo
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
