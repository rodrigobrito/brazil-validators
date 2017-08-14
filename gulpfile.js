var gulp = require("gulp");
var ts = require("gulp-typescript");
var concat = require('gulp-concat');
var merge = require('merge2');

var tsProject = ts.createProject("tsconfig.json");

gulp.task('scripts', function() {
    var tsResult = tsProject.src().pipe(tsProject());

    return merge([
        tsResult.dts.pipe(gulp.dest('dist/definitions')),
        tsResult.js.pipe(gulp.dest('dist/js'))
    ]);
});

gulp.task('concat-scripts', function() {
 return gulp.src(['./dist/js/brazil-validator.js', 
                  './dist/js/cnpj-validator.js'
                ])
   .pipe(concat('all.js'))
   .pipe(gulp.dest('./dist/js'));
});

gulp.task('default', ['scripts', 'concat-scripts']);