const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: '[name]-[chunkhash].js',
    path: path.resolve(__dirname, 'dist/js')

  },
  module: {
    rules: [{
      test:  /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]},  
    {
      test:/\.less$/,
      use:[
        {
          'loader':'style-loader'
        } ,{
          'loader':'css-loader',
          options: {
            sourceMap: true
          }
        },{
          'loader':'less-loader',
          options: {
            sourceMap: true
          }
        }] 
    } ,
    {
      test:/\.(png|svg|jpg|gif)$/,
      use:[
        'file-loader' 
      ]} 
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
    // new HtmlWebpackPlugin({
    //   template: __dirname + '/app/index.tmpl.html' //new 一个这个插件的实例，并传入相关的参数
    // }),
    // new ExtractTextPlugin({
    //   filename: './dist/css/[name]-[contenthash].css',
    // }),
  ]




}