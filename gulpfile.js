var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('build', function () {
    return gulp.src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});

gulp.task('dev', function () {
    return gulp.watch('./sass/*.scss', gulp.series('build'));
});
