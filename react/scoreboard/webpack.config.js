module.exports = {
  entry: './app.js',
  output: {
    //path     : 'build',
    filename : 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test    : /\.js$/,
        exclude : /node_modules/,
        loader  : 'babel-loader'
      }
    ]
  }
}
