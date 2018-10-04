const webpack = require('webpack');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const uglify = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './components/js/function.js',
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, loader: 'babel-loader'
            },
            {
                test: require.resolve('jquery'),
                use: [
                    {
                        loader: 'expose-loader',
                        options: '$'
                    },
                    {
                        loader: 'expose-loader',
                        options: 'jQuery'
                    }
                ]
            },
            {
                test: /\.css$/ , 
                loader: [
                    'style-loader','css-loader'
                ]
            }
        ]
    },
    devServer:{
        historyApiFallback:true,
        hot:true,
        inline:true
    },
    plugins: [
        new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
        new webpack.HotModuleReplacementPlugin(),
        new uglify()
    ]
}