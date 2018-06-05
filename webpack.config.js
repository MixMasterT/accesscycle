var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/world_bikes.jsx",  // Adjust this line to match your entry file name
  output: {
    path: path.join(__dirname, 'build'),
    filename: "bundle.js",
    publicPath: path.join(__dirname, 'build'),
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: [".js", ".jsx" ]
  }
};
