'use strict';

var autoprefixer = require('gulp-autoprefixer'),
    babel = require('gulp-babel'),
    connect = require('gulp-connect'),
    imagemin = require('gulp-imagemin'),
    gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    minifyCSS = require('gulp-minify-css'),
    notify = require('gulp-notify'),
    pngquant = require('imagemin-pngquant'),
    rename = require('gulp-rename'),
    rigger = require('gulp-rigger'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglyfly = require('gulp-uglyfly');


// server connect
gulp.task('connect', function() {
    connect.server({
        port: 3000,
        root: './dist',
        livereload: true
    });
});

// html
gulp.task('html', function() {
    gulp.src('src/html/index.html')
        .pipe(rigger())
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload())
        .pipe(notify({
            message: 'I did (html)!',
            onLast: true
        }));
});

// sass
gulp.task('sass', function() {
    gulp.src('src/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(minifyCSS())
        .pipe(rename('app.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css/'))
        .pipe(connect.reload())
        .pipe(notify({
            message: 'I did (css)!',
            onLast: true
        }));
});

// js
gulp.task('js', function() {
    gulp.src('src/js/main.js')
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglyfly())
        .pipe(rename('app.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js/'))
        .pipe(connect.reload())
        .pipe(notify({
            message: 'I did (js)!',
            onLast: true
        }));
});

// img
gulp.task('img', function() {
    gulp.src('src/img/**/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest('dist/img/'))
        .pipe(connect.reload())
        .pipe(notify({
            message: 'I did (img)!',
            onLast: true
        }));
});

// icon-fonts
gulp.task('icon-fonts', function(){
    gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts/'))
})

// watch
gulp.task('watch', function() {
    gulp.watch('src/html/**/*.html', ['html'])
    gulp.watch('src/scss/**/*.scss', ['sass'])
    gulp.watch('src/js/**/*.js', ['js'])
    gulp.watch('src/img/**/*', ['img'])
});

// default
gulp.task('default', ['connect', 'html', 'sass', 'js', 'icon-fonts', 'watch']);

// build
gulp.task('build', ['html', 'sass', 'js', 'img', 'icon-fonts']);