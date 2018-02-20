var gulp = require('gulp');
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');

var jsFiles = ['*.js', 'source/**/*.js'];

gulp.task('style', function () {

    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }));
});

gulp.task('inject', function () {
    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');

    var injectSrc = gulp.src(['./public/css/*.css', './public/js/*.js']);
    var injectOpions = {
        ignorePath: '/public'
    };

    var options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public'
    };

    return gulp.src('./source/views/*.html')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOpions))
        .pipe(gulp.dest('./source/views'));
});

gulp.task('serve',['style', 'inject'],function () {
   var options = {
       script: 'app.js',
       delayTime: 1,
       env: {
           'PORT': 3000
       },
       watch: jsFiles
   };
   return nodemon(options)
       .on('restart', function (ev) {
           console.log('Restarting.....');
       });
});