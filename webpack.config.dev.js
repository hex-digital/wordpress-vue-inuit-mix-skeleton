/* eslint-disable */
const StyleLintPlugin = require('stylelint-webpack-plugin');

const resourcePath = 'resources';
const buildPath = 'build';

module.exports = {
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|vue)$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },
        ],
    },
    plugins: [
        new StyleLintPlugin({
            configFile: '.stylelintrc',
            context: `${resourcePath}/sass`,
        }),
    ],
};
