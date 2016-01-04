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
      .src(argv.production ? ['app/**/*.ts', '!app/**/*.spec.ts'] : 'app/**/*.ts')
      .pipe(gulpif(!argv.production, sourcemaps.init()))
      .pipe(typescript(tscConfig.compilerOptions))
      .pipe(gulpif(!argv.production, sourcemaps.write('.')))
      .pipe(gulp.dest((argv.production ? prodDir : devDir) + '/app'));
});

gulp.task('copy:assets', ['clean'], function() {
  let assets = ['app/**/*', 'index.html', 'style.css', '!app/**/*.ts'];
  if (!argv.production) {
    assets.push('unit-tests.html');
  }

  return gulp.src(assets, { base : './' })
    .pipe(gulp.dest(argv.production ? prodDir : devDir));
});

gulp.task('copy:libs', ['clean'], function() {
  let libs = [
    'node_modules/angular2/bundles/angular2-polyfills.js',
    'node_modules/systemjs/dist/system.src.js',
    'node_modules/rxjs/bundles/Rx.js',
    'node_modules/angular2/bundles/angular2.dev.js',
    'node_modules/angular2/bundles/router.dev.js'
  ];

  if (!argv.production) {
    libs.push(
      'node_modules/jasmine-core/lib/jasmine-core/jasmine.css',
      'node_modules/jasmine-core/lib/jasmine-core/jasmine.js',
      'node_modules/jasmine-core/lib/jasmine-core/jasmine-html.js',
      'node_modules/jasmine-core/lib/jasmine-core/boot.js'
      );
  }

  return gulp.src(libs)
    .pipe(gulp.dest((argv.production ? prodDir : devDir) + '/lib'));
});

gulp.task('serve', ['build'], function() {
  browserSync({
    server: {
      baseDir: argv.production ? prodDir : devDir,
      middleware: [historyApiFallback()]
    },
    snippetOptions: {
      blacklist: ["/unit-tests.html"]
    },
    startPath: argv.test ? 'unit-tests.html' : ''
  });

  let watchFiles = ['app/**/*', 'index.html', 'style.css'];
  
  if (!argv.production) {
    watchFiles.push('unit-tests.html');
  }

  gulp.watch(watchFiles, ['buildAndReload']);
});

gulp.task('build', ['tslint', 'compile', 'copy:assets', 'copy:libs']);
gulp.task('buildAndReload', ['build'], reload);
gulp.task('default', ['build']);