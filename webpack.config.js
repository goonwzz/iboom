var path = require('path')
    , ExtractTextPlugin = require('extract-text-webpack-plugin')
    , srcPath = path.resolve(__dirname, './', 'app');
module.exports = {
    entry: `${srcPath}/website/www.js`,
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
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