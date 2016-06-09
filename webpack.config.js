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
        test: /\.wav$|\.mp3$/,
        include: __dirname + "/static/",
        loader: "file"
      }
    ]
  }
}