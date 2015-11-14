var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});
var browserSync = require('browser-sync').create();
var config = require('./gulp.config')();
var sass = require('gulp-sass');
// var converter = require('sass-convert');
var watch = require('gulp-watch');
// var changed = require('gulp-changed');


// Static Server 
gulp.task('browser-sync', function () {
    browserSync.init({
        server: "./"
        });
});

//Compile Sass into CSS & Auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(config.sass)
    .pipe($.plumber({
    errorHandler: function(err) {
    // display the error message
    console.log(err);
    // end the errored task
    this.emit('end')}
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.distsass))
    .pipe(browserSync.stream());
});

// Semi Working Workflow
gulp.task('default', ['browser-sync'], function() {
    gulp.watch(config.sass, ['sass']);
    gulp.watch(config.html).on('change', browserSync.reload);
    gulp.watch(config.js).on('change', browserSync.reload);
});

// Scripts


//  gulp.task('scripts', function() {
//     return gulp.src(config.alljs)
//     .pipe($.order([
//     "src/js/jquery-2.1.4.js",
//     "src/js/app.js"
//     ], { base: './' }))
//     .pipe($.concat('app.js'))
//     .pipe(gulp.dest(config.distjs))
//     .pipe($.rename({suffix:".min"}))
//     .pipe($.uglify())
//     .pipe(gulp.dest(config.distjs));
// });