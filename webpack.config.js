const path = require('path');

const rootDir = __dirname;

module.exports = {
    context: rootDir,

    devtool: 'cheap-module-source-map',

    entry: {'demo': './src/Demo.tsx'},

    output: {
        path: path.join(rootDir, 'dist'),
        publicPath: '/dist/',
        filename: '[name].js',
        chunkFilename: '[name].js',
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.join(rootDir, 'src/tsconfig.json'),
                        }
                    }
                ]
            }
        ]
    }
};