module.exports = {
  context: __dirname,
  entry: './lib/demo.js',
  output: {
    path: './lib',
    filename: 'bundle.js'
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ['', '.js'],
  }
};
