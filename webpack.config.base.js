/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
/* eslint-enable import/no-extraneous-dependencies */

const resourcePath = 'resources';
const buildPath = 'build';

module.exports = {
    resolve: {
        extensions: ['.js', '.json', '.vue'],
        alias: {
            '~': path.join(__dirname, './resources/js'),
        },
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        // new CleanWebpackPlugin([
        //     path.join(buildPath, 'js'),
        //     path.join(buildPath, 'css'),
        //     path.join(buildPath, 'fonts'),
        //     path.join(buildPath, 'img'),
        //     path.join(buildPath, 'sprites'),
        // ], {
        //     watch: false,
        // }),
        new CopyWebpackPlugin([{
            from: `${resourcePath}/img`,
            to: `${buildPath}/img`,
            test: /\.(jpe?g|png|gif|svg)$/i,
        }]),
        new SVGSpritemapPlugin({
            src:      `${resourcePath}/sprites/**/*.svg`,
            filename: `${buildPath}/sprites/sprites.svg`,
            prefix:   'icon-',
            svgo:     { removeTitle: true },
        }),
    ],
};
