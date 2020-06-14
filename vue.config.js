/* eslint-disable  @typescript-eslint/no-explicit-any */

const path = require("path");

module.exports = {
  publicPath: "",
  runtimeCompiler: true,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/style/sass/main.scss")],
    },
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      output: {
        publicPath: ""; // only for prod
      }
    } else {
      // dev
      // org, no changes
    }
    
  },
};
