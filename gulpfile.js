var gulp = require("gulp");
var ts = require("gulp-typescript");
var concat = require('gulp-concat');
var merge = require('merge2');

var tsStartProject = ts.createProject("tsconfig.start.json");
gulp.task('start-scripts', function() {
    var tsResult = tsStartProject.src().pipe(tsProject());
    return merge([
        tsResult.dts.pipe(gulp.dest('dist/definitions')),
        tsResult.js.pipe(gulp.dest('dist/js'))
    ]);
});

var tsProject = ts.createProject("tsconfig.json");
gulp.task('scripts', function() {
    var tsResult = tsProject.src().pipe(tsProject());

    return merge([
        tsResult.dts.pipe(gulp.dest('dist/definitions')),
        tsResult.js.pipe(gulp.dest('dist/js'))
    ]);
});

var webpack = require('webpack-stream');
gulp.task('webpack', function() {
  return gulp.src('dist/js/brazil.validators.js')
    .pipe(webpack({
      output: {
        filename: 'brazil.validators.min.js',
      },
      plugins: [
        new webpack.webpack.optimize.UglifyJsPlugin({ minimize: true, sourceMap: true })
      ]
    }))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('build', gulp.series('scripts', 'webpack'))


