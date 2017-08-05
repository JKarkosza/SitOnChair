var gulp = require('gulp');
var sass = require('gulp-sass');

//var sftp = require('gulp-sftp');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var prefix = require('gulp-autoprefixer');



// static server
//Static Server + watching scss/ html file
gulp.task('serve', ['rwd'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./scss/*.scss", ['rwd']);

    //Deploy na ftp
//   gulp.watch("./css/*", ['deployCss']);
//   gulp.watch("./*.php", ['deployMain']);

    gulp.watch("./*.css").on('change', browserSync.reload);
    gulp.watch("./*.html").on('change', browserSync.reload);
});




gulp.task('rwd', function() { // funkcja callback
    return gulp.src('./scss/*.scss') //-->zrodlo
        .pipe(sourcemaps.init())
        .pipe(sass({errLogToConsole:true}))
        .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css')) // --> gdzie laduja
        .pipe(browserSync.stream())
})




gulp.task('default', ['serve']);
