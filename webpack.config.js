var path = require('path')
    , ExtractTextPlugin = require('extract-text-webpack-plugin')
    , srcPath = path.resolve(__dirname, './', 'app')
    , webpack = require('webpack')
    , HtmlWebpackPlugin = require('html-webpack-plugin')
    , ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: {app: `${srcPath}/website/www.js`},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: '/',
        chunkFilename: 'js/[id].chunk.js'
    },
    devServer: {
        disableHostCheck: true,
        contentBase: srcPath,
        historyApiFallback: true,
        hot: true,
        port: 8810,
        publicPath: '',
        noInfo: true,
        quiet: false,
        compress: false,
        stats: {colors: true},
        proxy: {
            '/': {
                bypass: (req, res) => {
                    console.log(req.url)
                    return `/website/www.html`
                }
            }
        }
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.less', '.csm'],
        alias: {
            Routes: `${srcPath}/routes`,
            Containers: `${srcPath}/container`,
            Styles: `${srcPath}/styles`,
            Pages: `${srcPath}/pages`,
        },
    },
    devtool: 'inline-source-map',
    cache: true,
    debug: true,
    https: true,
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: `js/common.js`
        }),
        new webpack.DefinePlugin({
            // global vars added here must also be added to .eslintrc
            'process.env.NODE_ENV': JSON.stringify('development'),
            'HTTPS': false,
        }),
        new webpack.HotModuleReplacementPlugin(),
        //new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            favicon: path.resolve(srcPath, 'favicon.ico'),
            filename: 'www.html',
            chunks: ['app', 'common'],
            template: path.resolve(srcPath, 'website/www.html')
        }),
        new webpack.ProvidePlugin({
            'Promise': 'imports?this=>global!exports?global.Promise!es6-promise',
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        }),
        new webpack.optimize.MinChunkSizePlugin({minChunkSize: 10000}),
        new ExtractTextPlugin('css/[name].css')
    ],
    module: {
        loaders: [
            {test: /\.(json)$/, include: srcPath, loader: 'json-loader'},
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            },
            {
                test: /\.csm$/,
                //css-modules name=文件名 local--样式名 hash:base64:8 hash8
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?modules&localIdentName=[name]--[local]--[hash:base64:8]!less-loader'
                })
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader!less-loader'})

            }
        ]
    }
}