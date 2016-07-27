const fs          = require('fs');
const path        = require('path');
const argv        = require('yargs').argv;
const packageJson = require('./package.json');
const webpack     = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin  = require("extract-text-webpack-plugin");
const banner = fs.existsSync('./banner.txt') ?
               fs.readFileSync('./banner.txt', 'utf8') :
               '';

const NODE_ENV    = process.env.NODE_ENV;
const isDev       = NODE_ENV === 'development';
const isTest      = NODE_ENV === 'test';
const isSourceMap = !!argv.sourcemaps;

const config = require('./webpack.defaultConfig');

var css  = (isDev || isTest) ? "style!css?sourceMap!postcss"                : ExtractTextPlugin.extract("style", "css!postcss",      {publicPath: '../'});
var less = (isDev || isTest) ? "style!css?sourceMap!postcss!less?sourceMap" : ExtractTextPlugin.extract("style", "css!postcss!less", {publicPath: '../'});
var sass = (isDev || isTest) ? "style!css?sourceMap!postcss!sass?sourceMap" : ExtractTextPlugin.extract("style", "css!postcss!sass", {publicPath: '../'});

var webpackConfig = {
    // isSourceMap - if we need run in production with source maps, we need set --sourcemaps
    devtool: (isSourceMap ? 'source-map' : (isDev || isTest) ? config.webpack.devtool : null),
    // entry split code to 2 packages - vendors include all libs, and app - include all custom code
    // In dev mode we doesn't need include vendors. We set only app
    entry  : config.webpack.entry,
    output: {
        path: config.webpack.output.path,
        filename: '[name].js',
        library: 'CustomScroll',
        libraryTarget: 'umd'
    },
    externals: [{
            react: {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react'
            }
        }
    ],
    module: {
        preLoaders: [
            {test: /\.(js|jsx)$/, loader: "eslint-loader", exclude: /node_modules/}
        ],
        loaders: [
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]'
            },
            {
                test: /\.scss$/,
                loader: sass
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [
                    'url?limit=10000&name=images/[name].[ext]'
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|otf|svg)(\?.*$|$)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.md$/,
                loader: "html!markdown"
            },
            {
                test: /\.css$/,
                loader: css
            },
            {
                test: /\.less$/,
                loader: less
            },
            {
                test: /\.json/,
                loader: "json"
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                exclude: /node_modules/,
            },
        ]
    },
    cache: true,
    eslint: {
        emitErrors: true,
        failOnError: true,
        failOnWarning: true
    },
    postcss: (isDev || isTest) ? [
        require('precss')({}),
        require('autoprefixer')({})
    ] : [
        require('precss')({}),
        require('autoprefixer')({}),
        require('cssnano')({})
    ],
    resolve: {
        root: [
            path.join(__dirname, './src/vendors/bower'),
            path.join(__dirname, "node_modules"),
            path.join(__dirname, "./src/vendors/others")
        ],
        extensions: ['', '.js', '.jsx'],
        loaderExtensions: ['.js', ''],
        loaderPostfixes: [''],
        unsafeCache: true,
        postfixes: [''],
        alias: {
            '_atoms'  : __dirname + '/src/atoms/',
            '_configs': __dirname + '/src/atoms/configs',
            '_env'    : __dirname + '/src/atoms/configs/env.js',
            '_store'  : __dirname + '/src/atoms/store/index.js'
        }
    },
    profile: true,
    stats: {
        hash    : true,
        version : true,
        timings : true,
        assets  : true,
        chunks  : true,
        modules : true,
        reasons : true,
        children: true,
        source  : false,
        errors  : true,
        errorDetails: true,
        warnings    : true,
        publicPath  : true
    },
    devServer: {
        port  : config.webpack.devServer.port,
        hot   : true,
        noInfo: true,
        quiet : false,
        lazy  : false,
        historyApiFallback: true
    },
    plugins: [
        new CleanWebpackPlugin([config.webpack.output.path]),

        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(NODE_ENV || 'development') }
        }),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                sequences: true,
                dead_code: true,
                conditionals: true,
                booleans: true,
                unused: true,
                if_return: true,
                join_vars: true,
                drop_console: true
            },
            minimize: true
        }),

        new ExtractTextPlugin("styles.css"),

        new webpack.BannerPlugin(banner)
    ],
    isomorphic: {
        port: config.isomorphic.port
    }
};

if ((isTest || isDev) && config.webpack.entry.vendors) {
    delete config.webpack.entry.vendors;
}

if (isDev || isTest) {
    webpackConfig.output.publicPath = config.webpack.devServer.hostname + ':' + config.webpack.devServer.port + '/';
}

if (isTest) {
    webpackConfig.externals = {
        'jsdom': 'window',
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ReactContext': true,
        'react/lib/ExecutionEnvironment': true
    };
}
/**
 * In dev mode or test mode we don't need many plugins. It is speed up work
 * */
if (isTest || isDev) {
    webpackConfig.plugins = removeUnusedPlugins(webpackConfig.plugins, [
        'DedupePlugin',
        'CommonsChunkPlugin',
        'BannerPlugin',
        'UglifyJsPlugin',
        'ExtractTextPlugin'
    ]);
}
if (isTest) {
    webpackConfig.plugins = removeUnusedPlugins(webpackConfig.plugins, [
        'HtmlWebpackPlugin'
    ]);
}

function removeUnusedPlugins(array, unused) {
    return webpackConfig.plugins.filter(p => {
        const name = p.constructor.toString();
        const fnName = name.match(/^function (.*)\((.*\))/)

        const idx = unused.indexOf(fnName[1]);
        return idx < 0;
    });
}

module.exports = webpackConfig;