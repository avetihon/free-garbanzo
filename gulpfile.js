const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const notify = require('gulp-notify');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename'); // to rename any file
const sass = require('gulp-ruby-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const livereload = require('gulp-livereload');


const config = {
  sassPath: 'src/sass',
  jsPath: 'src/js',
};

const processors = [
  autoprefixer,
];

gulp.task('css', () =>
  sass(`${config.sassPath}/main.scss`, { sourcemap: true, style: 'expanded' })
    .pipe(postcss(processors))
    .pipe(cssnano())
    .pipe(rename('all.css'))
    .pipe(gulp.dest('dist'))
    .on('error', notify.onError((error) =>
      `Error: ${error.message}`
    ))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
    .pipe(notify({ message: 'Styles task complete' }))
    .pipe(livereload())
);

gulp.task('js', () =>
  gulp.src(['src/js/snake.js', 'src/js/level.js', 'src/js/init.js'])
    // .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015'],
    }))
    .pipe(concat('all.js'))
    // .pipe(uglify())
    // .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
    .pipe(notify({ message: 'JS task complete' }))
    .pipe(livereload())
);

gulp.task('watch', () => {
  livereload.listen();
  gulp.watch(config.sassPath + '/**/*.scss', ['css']);
  gulp.watch(config.jsPath + '/*.js', ['js']);
});
