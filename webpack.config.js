const path = require('path');
const pkg = require('./package.json');

const SRC_DIR = path.resolve(__dirname);
const PUBLIC_DIR = path.resolve(__dirname, 'public');

module.exports = {
  context: SRC_DIR,
  entry: `.${path.sep}index.js`,
  output: {
    path: PUBLIC_DIR,
    filename: 'bundle.js',
  },
  target: 'electron-main',
  devtool: 'eval-source-map', // switch to cheap-module-eval-source-map or eval if it gets too slow
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          SRC_DIR,
        ],
        loader: 'babel-loader',
        options: pkg.babel,
      },
      {
        test: /\.jsx?$/,
        include: [
          SRC_DIR,
        ],
        loader: 'eslint-loader',
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.png?$/,
        loader: 'url-loader',
        options: {
            limit: 25000,
        },
      },
    ],
  },
};
