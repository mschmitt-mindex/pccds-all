var webpack = require('webpack');

const env = process.env.NODE_ENV || 'development',
      fs = require('fs'),
      path = require('path'),
      varsJsonRaw = JSON.parse(fs.readFileSync('./package.json')),
      varsJsonString = JSON.stringify(varsJsonRaw),
      vars = JSON.parse(varsJsonString);

// Plugins
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// Paths
const bases = {
    source: vars.source_path,
    build:  vars.build_path,
    theme:  vars.theme_path,
    html:   vars.html_path,
    site:   vars.site_root,
};
const paths = {
    distJs: './' + bases.theme + 'js/',
    srcJs:  './' + bases.source + '_js/',
};

const appJs = paths.srcJs + "app.js";

module.exports = {
    entry: {
        app:    ["@babel/polyfill", appJs],
    },
    output: {
        chunkFilename: '[id].' + vars.version + '.js',
        filename: '[name].js',
        path: path.resolve(__dirname, paths.distJs),
        publicPath: "/js/",
    },
    mode: env || 'development',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    cacheDirectory: true,
                    presets: [
                        [
                            '@babel/preset-env', {
                                targets: {
                                    browsers: vars.browsersList,
                                },
                                useBuiltIns: 'usage',
                                debug: true
                            }
                        ],
                    ],
                    plugins: [
                        '@babel/plugin-proposal-object-rest-spread'
                    ]
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        presets: [
                            [
                                '@babel/preset-env', {
                                    targets: {
                                        browsers: vars.browsersList,
                                    },
                                    useBuiltIns: 'usage',
                                    debug: true
                                }
                            ],
                        ],
                        plugins: [
                            '@babel/plugin-proposal-object-rest-spread'
                        ]
                    },
                }
            }
        ]
    },
    plugins: (env === 'production') ? [
        new UglifyJsPlugin({
            sourceMap: true
        })
    ] : [],
    resolve: {
        alias: {
            vue: (env === 'production') ? 'vue/dist/vue.min.js' : 'vue/dist/vue.js'
        }
    }
};