const gulp = require('gulp');
const terser = require('gulp-terser');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-html-minifier-terser');
const rename = require('gulp-rename');
const htmlreplace = require('gulp-html-replace');


gulp.task('pack-css', async function () {    
  return gulp.src(['./assets/styles/spectre.css/spectre-modified.css', './assets/styles/style.css'])
      .pipe(concat('style.main.css'))
      .pipe(cleanCSS({
        level: 2
      }))
      .pipe(gulp.dest('./assets/bundles/'))
      .pipe(gulp.dest('./dist/assets/'));
});

gulp.task('pack-js', async function() {
    gulp.src(['./assets/js/function.js', './assets/js/iconfont.js'])
      .pipe(concat('function.main.js'))
      .pipe(terser())
      .pipe(gulp.dest('./assets/bundles/'))
      .pipe(gulp.dest('./dist/assets/'));
  });

gulp.task('minify-html', async function() {
    gulp.src(['./build/merger.html'])
      .pipe(htmlmin({ 
        collapseWhitespace: true,
        conservativeCollapse: true,
        collapseInlineTagWhitespace: true,
        collapseBooleanAttributes: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        sortAttributes: true,
        sortClassName: true,
       }))
      .pipe(rename('index.html'))
      .pipe(gulp.dest('build/'));
  });

  gulp.task('replace-js-css', async function() {
    gulp.src('./merger.html')
      .pipe(htmlreplace({
          'css': '/assets/style.main.css',
          'js': '/assets/function.main.js'
      }))
      // .pipe(rename('index.html'))
      .pipe(gulp.dest('build/'))
  });

gulp.task('compile', gulp.parallel('pack-css', 'pack-js'));
gulp.task('default', gulp.series('replace-js-css', 'minify-html'));