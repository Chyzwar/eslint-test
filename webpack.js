import webpack from 'webpack';
import path from 'path';

const webpack = {
  entry: './src/server.js',
  output: {
    path: './build',
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.join(__dirname, './src'),
  },
  cache: true,
  debug: true,
  target: 'node',
};

export default webpack;
