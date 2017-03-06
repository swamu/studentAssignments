var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/app/index.jsx",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    devtool : 'source-map',
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
             query: {
               presets: ['es2015', 'react','stage-2']
             }
         }
      ]
   }
}

module.exports = config;