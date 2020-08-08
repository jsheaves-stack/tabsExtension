const path = require("path");

module.exports = {
  entry: {
    popup: "./popup/popup.js",
  },
  output: {
    path: path.resolve(__dirname, "addon"),
    filename: "[name]/index.js",
  },
};
