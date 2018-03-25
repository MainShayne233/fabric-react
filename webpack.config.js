const webpack = require('webpack');
const path = require('path');

const DEV = 'development';
const env = process.env.NODE_ENV || DEV;
const isDev = env === DEV;
const devPort = 4000;
const publicPath = `http://localhost:${devPort}/`;

const devEntries = [
  'react-hot-loader/patch',
  `webpack-dev-server/client?${publicPath}`,
  'webpack/hot/only-dev-server',
  path.join(__dirname, 'demo', 'index.js'),
];

const devOutput = {
  path: path.join(__dirname, 'lib'),
  filename: '[name].bundle.js',
  publicPath,
};

const prodOutput = {
  path: path.join(__dirname, 'dist'),
  filename: 'index.js',
  library: 'index',
  libraryTarget: 'commonjs2',
};

const prodEntry = './src/index.js';

const plugins = [];

if (isDev) {
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = {
  devtool: isDev ? 'cheap-module-eval-source-map' : false,
  entry: {
    app: isDev ? devEntries : prodEntry,
  },
  output: isDev ? devOutput : prodOutput,
  resolve: {
    modules: [__dirname, 'node_modules', 'src'],
    extensions: ['*', '.js', '.jsx'],
  },
  resolveLoader: {
    modules: [path.join(__dirname, 'node_modules')],
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: ['babel-loader'],
        include: [path.join(__dirname, 'src'), path.join(__dirname, 'demo')],
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    hot: true,
    overlay: true,
    port: devPort,
    clientLogLevel: 'none',
    historyApiFallback: { index: 'demo/index.html' },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
  },
};
