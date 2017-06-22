// Include gulp
var gulp = require('gulp');

// Define base folders
var src = 'src/';
var dest = './';


// Include plugins
var order       = require('gulp-order');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var rename      = require('gulp-rename');
var compass     = require('gulp-compass');
 var imagemin  = require('gulp-imagemin');
var iconfont    = require('gulp-iconfont');
var spritesmith = require('gulp.spritesmith');
var consolidate = require('gulp-consolidate');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

// Sprite
gulp.task('sprites', function() {
  var spriteData = gulp.src([
    src + '/icons-sprite/*.png'
  ]).pipe(spritesmith({
      retinaSrcFilter: src + '/icons-sprite*/*@2x.png',
      imgName: 'sprite.png',
      retinaImgName: 'sprite@2x.png',
      //imgPath: dest + '../images/sprite.png',
      //retinaImgPath: dest + '../images/sprite@2x.png',
      cssName: '_icons-sprite.scss',
      cssTemplate: src + '/templates/icons-sprite.handlebars'
    }));
  spriteData.css.pipe(gulp.dest(dest + '/_sass/components'));
  return spriteData.img.pipe(gulp.dest(dest + '/img/'));
});


// Icon font
gulp.task('iconfont', function(){
  gulp.src([src + 'icons-font/*.svg']).
    pipe(iconfont({
      fontName: 'agw-icons', // required
      normalize: true, // icons to have the same height
      prependUnicode: false, // recommended option
      formats: ['woff2', 'woff'], // default, 'woff2' and 'svg' are available
    }))
    .on('glyphs', function(glyphs, options) {
      gulp.src([src + '/templates/_icons-font.scss']).
        pipe(consolidate('lodash', {
          glyphs: glyphs,
          fontName: 'agw-icons',
          fontPath: '../fonts/',
          className: 'i-agw'
        })).
        pipe(gulp.dest(dest + '/_sass/components'));
    }).
    pipe(gulp.dest(dest + '/fonts'));
});


// Watch
gulp.task('watch', function() {
  gulp.watch(src + 'scss/**/*', ['compass']);
  // Watch sprites files
  gulp.watch(src + 'icons-sprite/**/*', ['sprites']);
  // Watch icon font
  gulp.watch(src + 'icons-font/**/*', ['iconfont']);
});

// Build Task
gulp.task('build', ['sprites', 'iconfont']);

// Default Task
gulp.task('default', ['build', 'watch']);
