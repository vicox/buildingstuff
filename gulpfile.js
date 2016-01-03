/* jshint node: true */
"use strict";

const argv = require('yargs').argv;
const gulp = require('gulp');
const del = require('del');
const gulpif = require('gulp-if');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');
const tslint = require('gulp-tslint');
const browserSync = require('browser-sync');
const historyApiFallback = require('connect-history-api-fallback');
const reload = browserSync.reload;

const devDir = '.tmp';
const prodDir = 'dist';

gulp.task('clean', function () {
  return del((argv.production ? prodDir : devDir) + '/**/*');
});

gulp.task('tslint', function() {
  return gulp.src('app/**/*.ts')
    .pipe(tslint())
    .pipe(tslint.report('verbose'));
});

gulp.task('compile', ['clean'], function () {
  tscConfig.compilerOptions.outDir = argv.production ? prodDir + '/app' : devDir + '/app';

  return gulp
      .src('app/**/*.ts')
      .pipe(gulpif(!argv.production, sourcemaps.init()))
      .pipe(typescript(tscConfig.compilerOptions))
      .pipe(gulpif(!argv.production, sourcemaps.write('.')))
      .pipe(gulp.dest((argv.production ? prodDir : devDir) + '/app'));
});

gulp.task('copy:assets', ['clean'], function() {
  return gulp.src(['app/**/*', 'index.html', 'style.css', '!app/**/*.ts'], { base : './' })
    .pipe(gulp.dest(argv.production ? prodDir : devDir));
});

gulp.task('copy:libs', ['clean'], function() {
  return gulp.src([
      'node_modules/angular2/bundles/angular2-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/rxjs/bundles/Rx.js',
      'node_modules/angular2/bundles/angular2.dev.js',
      'node_modules/angular2/bundles/router.dev.js'
    ])
    .pipe(gulp.dest((argv.production ? prodDir : devDir) + '/lib'));
});

gulp.task('serve', ['build'], function() {
  browserSync({
    server: {
      baseDir: argv.production ? prodDir : devDir,
      middleware: [historyApiFallback()]
    }
  });

  gulp.watch(['app/**/*', 'index.html', 'style.css'], ['buildAndReload']);
});

gulp.task('build', ['tslint', 'compile', 'copy:assets', 'copy:libs']);
gulp.task('buildAndReload', ['build'], reload);
gulp.task('default', ['build']);