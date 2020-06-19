/* eslint-disable  @typescript-eslint/no-explicit-any */

const path = require("path");

module.exports = {
  
  runtimeCompiler: true,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/style/sass/main.scss")],
    },
  },
  
};
