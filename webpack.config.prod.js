/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
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
        new ImageminPlugin({
            cacheFolder: `./${buildPath}/img`,
            test: /\.(jpe?g|png|gif|svg)$/i,
            pngquant: {
                quality: '65-80',
            },
            // plugins: [
            //     imageminMozjpeg({
            //         quality: 65,
            //         // Set the maximum memory to use in kbytes
            //         maxMemory: 1000 * 512
            //     })
            // ]
        }),
    ],
};
