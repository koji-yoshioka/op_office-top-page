const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const TARGET_BROWSERS = [
  'last 2 versions',//各ブラウザの2世代前までのバージョンを担保
  'ie >= 11'//IE11を担保
];

const files = {
  scssPath: "./src/scss/**/*.scss"
}

gulp.task('sass', (done) => {
  gulp.src('./src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(TARGET_BROWSERS))
    .pipe(gulp.dest('./public/css'));
  done();
});

gulp.task('watch', (done) => {
  gulp.watch([files.scssPath], gulp.parallel(['sass']));
  done();
});
