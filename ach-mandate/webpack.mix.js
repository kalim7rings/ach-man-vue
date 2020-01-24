const mix = require('laravel-mix');
mix
    .options({
        uglify: {
            uglifyOptions: {
                compress: {
                    drop_console: true,
                }
            }
        }
    })
    .setPublicPath('public')
    .js('packages/ach-mandate/resources/assets/js/app.js', 'achmandate/')
    .sass('packages/ach-mandate/resources/assets/sass/app.scss', 'achmandate/')
    .version();