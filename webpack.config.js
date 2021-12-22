const path = require('path');

module.exports = {
  mode: 'production',
  watch: false,
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: 'ts-loader' }],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  output: {
    publicPath: '../dist/',
    path: path.resolve(__dirname, './dist'),
    chunkFilename: '[id].js',
    libraryTarget: 'umd',
    library: 'Examplesdk',
    filename: 'sdk.min.js',
    globalObject: 'this',
  },
  devtool: 'source-map',
  devServer: {
    port: "3000"
  }
};
