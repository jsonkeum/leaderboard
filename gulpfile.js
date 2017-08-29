var gulp = require('gulp');
var browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream');

gulp.task('default', function () {
 return browserify('./src/main.js')
 .transform(babelify)
 .bundle()
 .pipe(source('main.js'))
 .pipe(gulp.dest('./'));
});