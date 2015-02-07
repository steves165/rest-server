var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var jshint = require('gulp-jshint');
var minifyCSS = require('gulp-minify-css');
var cat = require('gulp-cat');
var templateCache = require('gulp-angular-templatecache');
var htmlreplace = require('gulp-html-replace');

var srcRoot = './src/main/'

var paths = {
	src: {
		js: srcRoot + 'javascripts/',
		sass: srcRoot + 'sass/',
		routes: srcRoot + 'routes/',
		views: srcRoot + 'views/',
		images: srcRoot + 'resources/images/'
	},
	target:  {
		public: './deceiver-site/public/',
		root: './deceiver-site/'
	}
};

gulp.task('scripts-build', function() {
	gulp.src(paths.src.js + '**/*.js')
		.pipe(plumber(function (error) {
            gutil.log(gutil.colors.red(error.message));
            gutil.beep();
            this.emit('end');
        }))
		.pipe(gulp.dest(paths.target.public + 'js'));
});

gulp.task('styles-build', function() {
	gulp.src(paths.src.sass + 'styles.scss')
		.pipe(sourcemaps.init())
		.pipe(plumber(function (error) {
            gutil.log(gutil.colors.red(error.message));
            gutil.beep();
            this.emit('end');
        }))
		.pipe(sass())
		.pipe(sourcemaps.write(paths.target.public + 'css/maps'))
		.pipe(gulp.dest(paths.target.public + 'css'));
});

gulp.task('images-copy', function() {
	gulp.src(paths.src.images + '**/*.*')
		.pipe(plumber(function (error) {
            gutil.log(gutil.colors.red(error.message));
            gutil.beep();
            this.emit('end');
        }))
		.pipe(gulp.dest(paths.target.public + 'images'));
});

gulp.task('views-build', function() {
	gulp.src(paths.src.views + '**/*.jade')
		.pipe(gulp.dest(paths.target.root + 'views'));
});

gulp.task('routes-build', function() {
	gulp.src(paths.src.routes + '**/*.js')
		.pipe(gulp.dest(paths.target.root + 'routes'));
});

gulp.task('server-construct', function() {
	gulp.src(srcRoot + 'server/**/*')
		.pipe(gulp.dest(paths.target.root));
});

gulp.task('dev-hard', ['scripts-build', 'styles-build', 'views-build', 'routes-build', 'images-copy', 'server-construct']);