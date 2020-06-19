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
  chainWebpack: (config) => {
    config
        .plugin('html')
        .tap(args => {
            args[0].title = 'MyApp title';
            args[0].viewport ='width=device-width,initial-scale=1,user-scalable=no';
            args[0].description="A portfolio website built to showcase some of my work, built with VueJS and Typescript";
        
                            

         return args;
    })
}
};
