// webpack.config.js
const path = require('path');

module.exports = {
    entry: './src/styles/main.scss',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',  // Injects styles into the DOM
                    'css-loader',    // Translates CSS into CommonJS
                    'sass-loader'    // Compiles Sass to CSS
                ],
            },
        ],
    },
    devServer: {
        static: path.join(__dirname, 'src'),
        port: 8080,
        open: true,
        hot: true
    },
};
