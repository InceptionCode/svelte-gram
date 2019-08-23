{
  test: /\.html$/,
  use: [ "html-loader" ],
  options: {
    minimize: true,
    removeComments: false,
    collapseWhitespace: false
  }
}
new CleanWebpackPlugin()