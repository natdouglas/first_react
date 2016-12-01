var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});
var HotModuleReplacementPluginConfig= new webpack.HotModuleReplacementPlugin({
	multiStep: true
});

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  resolve: {
    extensions: [ '', '.js', '.css' ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 4200
  },
  watchOptions: {
    // Delay the rebuild after the first change
    aggregateTimeout: 300,
    // Poll using interval (in ms, accepts boolean too)
    poll: 1000
  },
  module: {
    loaders: [
    {
      test: /\.css$/,
      loaders: ['style', 'css'],
      path: __dirname + '/src'
    },
    {//react-html-attrs allows you to avoid className in your JSX
      test: /\.jsx?$/,
//      loaders: ["babel?presets[]=es2015,presets[]=stage-0,presets[]=react,plugins[]=react-html-attrs","eslint-loader"],
      loaders: ["babel?presets[]=es2015,presets[]=stage-0,presets[]=react,plugins[]=react-html-attrs"],
      exclude: /node_modules/
    },
    {
      test: /\.(png|jpg|woff|woff2|ttf|eot|svg)$/,
      loader: 'file-loader?name=images/[name].[ext]' 
    },
      { test: require.resolve('jquery'), loader: 'expose?jQuery' }
    ]
  },
  plugins: [
  	HTMLWebpackPluginConfig,
  	HotModuleReplacementPluginConfig
  ]
};