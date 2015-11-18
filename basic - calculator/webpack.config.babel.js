require('babel-core/register');

import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
    devtool: 'source-map',
    entry: {
        main: [
            './src/index.js',
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server'
        ]
    },
    output: {
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/index.tpl.html',
            hash: true,
            filename: 'index.html',
            inject: 'body'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.sass']
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: '/node_modules/',
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.sass$/,
            loaders: [
                'style-loader',
                'css-loader',
                'autoprefixer',
                'sass-loader?indentedSyntax=sass'
            ]
        }]
    },
    devServer: {
        contentBase: './src',
        hot: true,
        quiet: false,
        noInfo: false,
        lazy: false,
        stats: {
            colors: true
        },
        historyApiFallback: true
    }
};
