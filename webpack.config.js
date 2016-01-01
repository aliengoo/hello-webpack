var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // The base directory (absolute path!) for resolving the entry option.
  context: path.resolve('js'),
  // the entry point(s) for the build
  // see http://jamesknelson.com/using-es6-in-the-browser-with-babel-6-and-webpack/ for more information
  entry: ['babel-polyfill', './app', './utils'],
  output: {
    // The output directory as absolute path (required).
    // this is served up from memory when running the dev server, the folder isn't actually created
    path: path.resolve('build/'),
    // The output.path from the view of the Javascript / HTML page.  The actual files remain in build/js
    publicPath: '/public/',
    filename: "bundle.js"
  },
  plugins: [new ExtractTextPlugin('styles.css')],
  // https://webpack.github.io/docs/webpack-dev-server.html
  // Using this config webpack-dev-server will serve the static files in your public folder
  devServer: {
    contentBase: 'public'
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'jshint-loader'
    }],
    loaders: [{
      // what kind of file
      test: /\.es6$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!sass-loader')
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader')
    }, {
      test: /\.(png|jpg|woff|woff2|eot|ttf|svg)/, loader: 'url-loader?limit=10000'
    }]
  },
  resolve: {
    // handle .es6 extensions, the first two options reset the default extensions
    extensions: ['', '.js', '.es6', '.css']
  },
  watch: true
};