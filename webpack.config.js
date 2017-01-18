module.exports = {
  entry: './greeter.ts',
  output: {
    filename: 'bundle.js'
  },
  devtool: "source-map",
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"]
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ],

    preLoaders: [
      {
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  }
};