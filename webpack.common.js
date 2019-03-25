const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    context: path.join(__dirname, 'src'),
    entry: './components/app/App.jsx',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            data: path.join(__dirname, 'src', 'data'),
            img: path.join(__dirname, 'src', 'img'),
            util: path.join(__dirname, 'src', 'util'),
            error: path.join(__dirname, 'src', 'components', 'error'),
            app: path.join(__dirname, 'src', 'components', 'app')
        },
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "index.html"
        })
    ],
    module: {
        rules: [{
                test: /\.m?(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader?cacheDirectory=true'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                },
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
        open: true,
        hot: true
    }
};