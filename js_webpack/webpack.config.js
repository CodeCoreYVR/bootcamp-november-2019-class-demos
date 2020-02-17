const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  // You can specify an "entry" file in multiple ways.
  // An "entry" is the file where webpack begins
  // bundling all of your modules.
  // For a single entry, write:
  // entry: "./src/client.js"
  // For multiple entry files bundled into a single
  // file, use an array:
  // entry: ["./src/client.js", "./src/defaults.js"]
  // To create multiple bundles from seperate
  // entry files, use an object where key will be
  // the name of the bundle and the value will be the
  // entry file for that bundle.
  entry: {
    client: "./src/client.js"
    // server: "./src/server.js"
  },
  output: {
    // The "path" property is used to specify the location
    // where our bundled files are created. By default, it
    // is path.join(__dirname, "dist")
    path: path.join(__dirname, "build"),
    // The "filename" property specifies the name of the
    // created bundles. Use [name] in the value to interpolate
    // the of an entry specified by their key in the entry
    // property object.
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|webp|svg)$/,
        // npm i -D file-loader
        loader: "file-loader",
        options: {
          outputPath: "images/"
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // Us "exclude" with a regular expression to specify
        // files that should be ignored by this loader.
        // In this case, we ignore files that have "node_modules"
        // in their path because babel should only process our files
        // and not our installed packages.
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Demo", // <title> of the web page
      chunks: ["client"]
      // Only include the bundle named "client" ignoring
      // every other bundle.
    })
  ]
};
