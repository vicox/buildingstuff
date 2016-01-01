const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');
const tslint = require('gulp-tslint');
const browserSync = require('browser-sync');
const historyApiFallback = require('connect-history-api-fallback');
const reload = browserSync.reload;

gulp.task('clean', function () {
  return del('dist/**/*');
});

gulp.task('tslint', function() {
  return gulp.src('app/**/*.ts')
    .pipe(tslint())
    .pipe(tslint.report('verbose'));
});

gulp.task('compile', ['clean'], function () {
  return gulp
    .src('app/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/app'));
});

gulp.task('copy:assets', ['clean'], function() {
  return gulp.src(['app/**/*', 'index.html', 'style.css', '!app/**/*.ts'], { base : './' })
    .pipe(gulp.dest('dist'));
});

gulp.task('copy:libs', ['clean'], function() {
  return gulp.src([
      'node_modules/angular2/bundles/angular2-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/rxjs/bundles/Rx.js',
      'node_modules/angular2/bundles/angular2.dev.js',
      'node_modules/angular2/bundles/router.dev.js'
    ])
    .pipe(gulp.dest('dist/lib'));
});

gulp.task('serve', ['build'], function() {
  browserSync({
    server: {
      baseDir: 'dist',
      middleware: [historyApiFallback()]
    }
  });

  gulp.watch(['app/**/*', 'index.html', 'style.css'], ['buildAndReload']);
});

gulp.task('build', ['tslint', 'compile', 'copy:assets', 'copy:libs']);
gulp.task('buildAndReload', ['build'], reload);
gulp.task('default', ['build']);