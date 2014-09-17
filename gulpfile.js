var gulp    = require('gulp');
var concat  = require('gulp-concat');
var rename  = require('gulp-rename');
var jshint  = require('gulp-jshint');
var uglify  = require('gulp-uglify');

gulp.task('scss', function() {
  return gulp.src('src/scss/basscss/basscss.scss')
    .pipe(sass())
    .pipe(prefix("last 1 version", "> 1%", "ie 8"))
    .pipe(csslint())
    .pipe(cssmin())
    .pipe(rename('c.min.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function() {
  return gulp.src('public/js/*.js')
    .pipe(jshint())
    .pipe(concat('../j.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'))
})

gulp.task('default', ['js']);