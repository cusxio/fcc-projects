require('babel-core/register');

import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const sassLoaders = [
  'css-loader',
  'autoprefixer-loader',
  'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src')
];

module.exports = {
    devtool: 'source-map',
    entry: {
        main: [
            './src/index.js',
        ]
    },
    output: {
        filename: '[name].[hash].js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
          }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.tpl.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new ExtractTextPlugin('[name].[contenthash].css'),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
              'unused': true,
              'dead_code': true
          }
        }),
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: '[name].[hash].js', minChunks: Infinity})
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.sass']
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: '/node_modules/',
            loaders: ['babel'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.sass$/,
            loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
        }]
    }
};
