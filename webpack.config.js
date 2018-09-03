// npm i --save-dev webpack webpack-cli 
// npm i -D html-webpack-plugin
// npm install --save-dev extract-text-webpack-plugin
// npm install --save-dev optimize-css-assets-webpack-plugin
// npm i -D mini-css-extract-plugin
// npm i -D less-loader
// npm i -D less
// npm install --save-dev css-loader
// npm install --save-dev ts-loader
// npm i -D css-loader style-loader
// npm install postcss-loader --save-dev
// npm i -D autoprefixer
// npm install babel-core babel-loader babel-preset-env babel-preset-stage-3 --save-dev
// npm install file-loader --save-dev
// npm install clean-webpack-plugin --save-dev
// npm install --save-dev webpack-dev-server
// npm install --save-dev json-loader
// npm install -g typescript
// npm install --save-dev typescript ts-loader
// Для работы с Typescript необходимо в папке с ts файлами написать команду ts --init
//     создастся файл конфигурации tsconfig.json с начальными опциями
// npm i -D nodemon , // npm i -g  - подключаем javascript - слушатель




const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');



module.exports = {
    mode: "production", // 'production' | "development"
    context: path.resolve(__dirname, 'src'),
    entry: { // Тут писать в порядке подключения в index.html
        // vendor: ['jquery'],
        bundle: './js/index.js',
        // metrica: './js/yandex_metrica.js'
    },
    output: {
        filename: '[name].[hash].js', // Можно filename: '[name].[chunkhash].js' но будут длинные имена файлов
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
        /*     { 
                test: /\.json$/, 
                use: { 
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                },
                type: "javascript/auto"
            }, */
            {
                test: /\.tsx?$/,
                use: {
                     loader : 'ts-loader',
                    
                },
                exclude: /node_modules/
              },

            {
                test: /\.(png|jpg|gif|ico|php)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[hash].[ext]'
                        // name: '[path][name].[ext]'
                    }
                }
            },            
            {
                test: /\.(ttf|otf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                        // name: '[path][name].[ext]'
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                        loader: 'style-loader'
                    }, MiniCssExtractPlugin.loader, {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, 
                     MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                }, 

                {
                    loader: 'postcss-loader'
                },

                {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }]
            }
        ]
    },
    optimization: { // вместо 'common.js'
        splitChunks: {
            chunks: "all",
            minChunks: 2
        }, 
        minimize: true
    },
    plugins: [
        
        new HtmlWebpackPlugin({
            template: './template.html',
            chunks: [/* 'vendor', */  'bundle'/* , 'metrica' */], //скрипты. которые нужно подключить к html
            name: 'index.html',
            hash: true,
            inject: true,           
            cache: true,
            minify: true
        }),        
        require('autoprefixer'),
       new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css',
        }),
        new OptimizeCSSAssetsPlugin({}), // Минимизирует код css для отображения sourcemap нужно закомментировать данный плагин
        new CleanWebpackPlugin(['dist']), // Плагин очищает папку dist перед пересозданием файлов  (не работает при webpack -w, работает при webpack)
        new webpack.HotModuleReplacementPlugin({})
    ], 
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
      },
    devServer: {
        // hot: true,
        inline: true,
        contentBase: path.join(__dirname, "dist"),
        // compress: true,
        port: 8080,
        progress: true,
        open: true, //чтобы страница автоматически запускалась при использовании dev-сервера     
    },
    performance: {
        hints: false    //Скрываем системное предупреждение о максимальном размере файла
    },
    devtool : 'eval-sourcemap' //'source-map' - Для dev-разработки!!! для production 'eval-sourcemap'

};