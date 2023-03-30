const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('sass');

gulp.task('sass', function () {
  return gulp
    .src('./scss/**/*.scss') // Change the path to your SCSS folder
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css')); // Change the path to your desired CSS output folder
});

gulp.task('watch', function () {
  gulp.watch('./scss/**/*.scss', gulp.series('sass')); // Change the path to your SCSS folder
});
