const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");
// require("laravel-mix-purgecss");

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

mix
  .js("resources/js/app.js", "public/js")
  .sass("resources/sass/app.scss", "public/css")
  .options({
    processCssUrls: false,
    postCss: [tailwindcss("./tailwind.config.js")],
  })
  // .purgeCss({
  //   enabled: true,
  //   folders: ["resources"],
  //   extensions: ["html", "js", "php"],
  //   extractorPattern: [/[a-zA-Z0-9-_:/]+/g]
  // })
  .browserSync({
    //hostname from /etc/hosts file
    proxy: "hostname",
  });
