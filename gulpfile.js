/* jshint node: true */
"use strict";

const argv = require('yargs').argv;
const gulp = require('gulp');
const gutil = require('gulp-util');
const del = require('del');
const merge = require('merge-stream');
const rename = require("gulp-rename");
const gulpif = require('gulp-if');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');
const tslint = require('gulp-tslint');
const browserSync = require('browser-sync');
const historyApiFallback = require('connect-history-api-fallback');
const reload = browserSync.reload;
const markdown = require('gulp-markdown-to-json');
const jsonTransform = require('gulp-json-transform');

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

gulp.task('compile:app', ['clean'], function () {
  tscConfig.compilerOptions.outDir = (argv.production ? prodDir: devDir) + '/app';

  return gulp
      .src('app/**/*.ts')
      .pipe(gulpif(!argv.production, sourcemaps.init()))
      .pipe(typescript(tscConfig.compilerOptions))
      .pipe(gulpif(!argv.production, sourcemaps.write('.')))
      .pipe(gulp.dest(tscConfig.compilerOptions.outDir));
});

gulp.task('compile:spec', ['clean', 'compile:app'], function () {
  if (!argv.production) {
    tscConfig.compilerOptions.outDir = devDir;

    return gulp
        .src('spec/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(tscConfig.compilerOptions.outDir));
  }
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
  if (argv.production) {
    return merge(
      gulp.src("node_modules/angular2/bundles/angular2-polyfills.min.js")
        .pipe(rename("angular2-polyfills.js"))
        .pipe(gulp.dest(prodDir + '/lib')),
      gulp.src("node_modules/systemjs/dist/system.js")
        .pipe(gulp.dest(prodDir + '/lib')),
      gulp.src("node_modules/rxjs/bundles/Rx.min.js")
        .pipe(rename("Rx.js"))
        .pipe(gulp.dest(prodDir + '/lib')),
      // use angular2.min.js when ngClass issue is fixed
      gulp.src("node_modules/angular2/bundles/angular2.js")
        .pipe(rename("angular2.js"))
        .pipe(gulp.dest(prodDir + '/lib')),
      gulp.src("node_modules/angular2/bundles/router.min.js")
        .pipe(rename("router.js"))
        .pipe(gulp.dest(prodDir + '/lib')),
      gulp.src("node_modules/angular2/bundles/http.min.js")
        .pipe(rename("http.js"))
        .pipe(gulp.dest(prodDir + '/lib'))
      );
  } else {
    return merge(
      gulp.src("node_modules/angular2/bundles/angular2-polyfills.js")
        .pipe(gulp.dest(devDir + '/lib')),
      gulp.src("node_modules/systemjs/dist/system.src.js")
        .pipe(rename("system.js"))
        .pipe(gulp.dest(devDir + '/lib')),
      gulp.src("node_modules/rxjs/bundles/Rx.js")
        .pipe(gulp.dest(devDir + '/lib')),
      gulp.src("node_modules/angular2/bundles/angular2.dev.js")
        .pipe(rename("angular2.js"))
        .pipe(gulp.dest(devDir + '/lib')),
      gulp.src("node_modules/angular2/bundles/router.dev.js")
        .pipe(rename("router.js"))
        .pipe(gulp.dest(devDir + '/lib')),
      gulp.src("node_modules/angular2/bundles/http.dev.js")
        .pipe(rename("http.js"))
        .pipe(gulp.dest(devDir + '/lib')),
      gulp.src([
        'node_modules/angular2/bundles/testing.dev.js',
        'node_modules/jasmine-core/lib/jasmine-core/jasmine.css',
        'node_modules/jasmine-core/lib/jasmine-core/jasmine.js',
        'node_modules/jasmine-core/lib/jasmine-core/jasmine-html.js',
        'node_modules/jasmine-core/lib/jasmine-core/boot.js'
       ])
        .pipe(gulp.dest(devDir + '/lib'))
      );
  }
});

gulp.task('markdown', ['clean'], function() {
  return merge(
    gulp.src('content/fields/**/*.md')
      .pipe(gutil.buffer())
      .pipe(markdown('fields.json'))
      .pipe(gulp.dest((argv.production ? prodDir: devDir) + '/server')),
    gulp.src('content/tutorials/**/*.md')
      .pipe(gutil.buffer())
      .pipe(markdown('tutorials.json', {
        highlight: function (code) {
          return require('highlight.js').highlightAuto(code).value;
        }}))
      .pipe(gulp.dest((argv.production ? prodDir: devDir) + '/server')),
    gulp.src('content/itemsets/**/*.md')
      .pipe(gutil.buffer())
      .pipe(markdown('itemsets.json'))
      .pipe(gulp.dest((argv.production ? prodDir: devDir) + '/server')),
    gulp.src('content/items/**/*.md')
      .pipe(gutil.buffer())
      .pipe(markdown('items.json'))
      .pipe(gulp.dest((argv.production ? prodDir: devDir) + '/server'))
  );
});

gulp.task('server', ['markdown'], function() {
  let dir = (argv.production ? prodDir: devDir) + '/server';

  return gulp.src(dir + '/**/*.json')
    .pipe(jsonTransform(object => {
      return Object.keys(object).map(key => {
        object[key].id = parseInt(key);
        return object[key];
      });
    }))
    .pipe(gulp.dest(dir));
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

  let watchFiles = ['app/**/*', 'index.html', 'style.css', 'content/**/*'];

  if (!argv.production) {
    watchFiles.push('spec/**/*');
    watchFiles.push('unit-tests.html');
  }

  gulp.watch(watchFiles, ['buildAndReload']);
});

gulp.task('build', ['tslint', 'compile:app', 'compile:spec', 'copy:assets', 'copy:libs', 'server']);
gulp.task('buildAndReload', ['build'], reload);
gulp.task('default', ['build']);
