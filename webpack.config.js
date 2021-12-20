const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production'

    return  {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets:["@babel/preset-env", "@babel/preset-react"],
                        plugins:[
                            "@babel/plugin-proposal-class-properties",
                            "@babel/plugin-proposal-object-rest-spread",
                            "@babel/plugin-transform-modules-commonjs",
                        ]
                    }
                }
            }, { 
                test: /\.s?css$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      publicPath: (resourcePath, context) => {
                        return (
                          path.relative(path.dirname(resourcePath), context) + '/'
                        );
                      },
                    },
                  },
                  'css-loader',
                  'sass-loader',
                ],
              },
            ],
          },
        plugins: [
            new MiniCssExtractPlugin({ 
                filename: 'styles.css'
            })
        ],
        devtool: isProduction? 'source-map' : "inline-cheap-module-source-map",
        devServer: {
            static: {
              directory: path.join(__dirname, 'public'),
              publicPath: '/dist/'
            },
            historyApiFallback: true
          },
    
    }
}
