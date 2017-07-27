var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path=require('path');

// var extractPlugin = new ExtractTextPlugin(
//     {
//         filename: 'main.css'
//     }
// );


module.exports = {

    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath:'/dist'
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }
            )
    ],
    // output: {
    //     path: __dirname,
    //     publicPath: '/',
    //     filename: 'bundle.js'
    // },
    // module: {
    //     loaders: [{
    //         exclude: /node_modules/,
    //         loader: 'babel',
    //         query: {
    //             presets: ['react', 'es2015', 'stage-1']
    //         }
    //     }],
    // },

    module:{
        loaders:[
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        'react', 'es2015', 'stage-1'
                    ]
                }
            },
            {
                test: /\.css$/,
                // use: extractPlugin.extract({
                //     use: [{
                    loaders:['style-loader',
                        'css-loader']
                    // }]
                // })

            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                loader: 'url-loader'
            }
        ]
    },


    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        inline: true,
        port: 8080
    }
};


