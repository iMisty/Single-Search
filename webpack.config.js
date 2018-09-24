var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
    entry: './components/function.js',
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {test: /\.js$/, loader: 'babel-loader'},{
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
        new webpack.HotModuleReplacementPlugin()
    ]
}