var path    = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    devtool : 'source-map',
    devServer : {
        contentBase: path.resolve(__dirname, 'build'),
        stats: {
			modules: false,
			cached: false,
			colors: true,
			chunk: false
		},
        // Enable history API fallback so HTML5 History API based
        // routing works. This is a good default that will come
        // in handy in more complicated setups.
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        
        host: process.env.HOST,
        port: process.env.PORT || 3067
    },
    entry: [
        "./src/app/app.js",
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        pathInfo: true,
        filename: 'bundle.js',
        publicPath: '/build'
    },
    module: {
        loaders: [
            {
                // JS LOADER
                // Reference: https://github.com/babel/babel-loader
                // Transpile .js files using babel-loader
                // Compiles ES6 and ES7 into ES5 code
                // ng-annotate to Add, remove and rebuild AngularJS dependency injection annotations
                // https://github.com/olov/ng-annotate#library-api
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'ng-annotate!babel?presets[]=es2015',
            },
            {
                // SASS LOADER
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            { 
                // HTML LOADER
                // Reference: https://github.com/webpack/raw-loader
                // Allow loading html through js
                test: /\.html$/, 
                loader: 'raw' 
            },
            {
                // ASSET LOADER
                // Reference: https://github.com/webpack/file-loader
                // Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
                // Rename the file using the asset hash
                // Pass along the updated reference to your code
                // You can add here any file extension you want to get copied to your output
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file'
            }
        ]
    },
    plugins: [
        // Reference: https://github.com/ampedandwired/html-webpack-plugin
        // Render index.html
        new HtmlWebpackPlugin({
            template: './build/index.html',
            inject: 'body',
            hash: true
        }),
        
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;