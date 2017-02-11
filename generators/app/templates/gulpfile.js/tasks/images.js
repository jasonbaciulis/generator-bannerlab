'use strict';

var browserSync = require('browser-sync');
var changed = require('gulp-changed');
var config = require('../config');
var gulp = require('gulp');
var handleErrors = require('../lib/handleErrors');
var imagemin = require('gulp-imagemin');
var plumber = require('gulp-plumber');
// var gulpPngquant = require('gulp-pngquant');
var imageminPngquant = require('imagemin-pngquant');

gulp.task('images', function() {
  return gulp.src(config.tasks.images.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    // .pipe(gulpPngquant( {quality: '55-65'} ))
    .pipe(imagemin({
        use: [imageminPngquant()] 
    }))
    .pipe(changed(config.tasks.images.dest))
    .pipe(gulp.dest(config.tasks.images.dest))
    .pipe(browserSync.stream());
});