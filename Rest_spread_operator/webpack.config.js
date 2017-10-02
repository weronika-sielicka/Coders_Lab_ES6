module.exports = {
  entry: "./js/zadanie03.js",
  output: {
    filename: "./js/out.js"
  },
  watch: true,
  module: {
    loaders: [{
      test: /.\js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      query: {
        presets: ["es2015"],
      }
    }]

  }


}
