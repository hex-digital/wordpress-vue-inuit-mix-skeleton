/* eslint-disable import/no-extraneous-dependencies */
const mix = require('laravel-mix');
const baseConfig = require('./webpack.config.base.js');
const developmentConfig = require('./webpack.config.dev.js');
const productionConfig = require('./webpack.config.prod.js');

// const ImageminPlugin = require('imagemin-webpack-plugin').default;
// const imageminMozjpeg = require('imagemin-mozjpeg');
// const StyleLintPlugin = require('stylelint-webpack-plugin');
// const WebpackShellPlugin = require('webpack-shell-plugin');
/* eslint-enable import/no-extraneous-dependencies */

const resourcePath = 'resources';
const buildPath = 'build';

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application.
 |
 */

mix.sass(`${resourcePath}/sass/main.scss`, `${buildPath}/css`)
    .js(`${resourcePath}/js/app.js`, `${buildPath}/js`)
    .extract([
        'axios',
        'debounce',
        'throttleit',
        'vue',
        'vue-analytics',
        'vue-analytics-fb',
        'vue-axios',
        'vuex',
    ])
    .options({
        processCssUrls: false,
        extractVueStyles: true,
        globalVueStyles: 'resources/sass/settings-tools.scss',
    })
    .copyDirectory(`${resourcePath}/fonts`, `${buildPath}/fonts`)
    .webpackConfig(baseConfig);


// mix.browserSync({
//     proxy: 'skeleton.local'
// })

if (!mix.inProduction()) {
    mix.webpackConfig(developmentConfig);
}

// Put all Production only config here
if (mix.inProduction()) {
    mix
        .disableNotifications()
        .webpackConfig(productionConfig);
}
