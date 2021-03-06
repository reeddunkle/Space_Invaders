module.exports = {
  devtool: "eval-source-map",
  entry: __dirname + "/src/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist/"
  },
  devServer: {
    contentBase: "static/"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: __dirname + "/src/",
        loader: "babel-loader"
      },
      {
        test: /\.mp3/,
        include: __dirname + "/src/audio/",
        loader: "file-loader"
      }
    ]
  }
}