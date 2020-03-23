const mix = require("laravel-mix");
require("dotenv").config();
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({
    processCssUrls: false
});

if (!mix.inProduction()) {
    mix.webpackConfig({
        devtool: "source-map"
    }).sourceMaps();
}

// mix.webpackConfig({
//     module: {
//         loaders: [
//             {
//                 test: /\.mp4$/,
//                 use: "file-loader?name=videos/[name].[ext]"
//             }
//         ]
//     }
// });

mix.react("resources/js/app.js", "public/js")
    .sass("resources/sass/app.scss", "public/css")

    .browserSync({
        host: "localhost",
        port: 3000,
        proxy: {
            target: process.env.APP_URL // Yay! Using APP_URL from the .env file!
        }
    });

// add versioning
mix.version();
