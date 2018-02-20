var gulp = require('gulp');
var jshint = require('gulp-jshint');

var jsfiles = ['*.js', 'source/**/*.js'];
gulp.task('style', function () {

    gulp.src(jsfiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }));
});