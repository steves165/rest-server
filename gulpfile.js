var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var minifyCSS = require('gulp-minify-css');
var cat = require('gulp-cat');
var templateCache = require('gulp-angular-templatecache');
var htmlreplace = require('gulp-html-replace');

var TEMPLATE_HEADER = '(function() {       "use strict"; angular.module("<%= module %>"<%= standalone %>).run(["$templateCache", function($templateCache) {';
var TEMPLATE_FOOTER = '}]);})();';

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

var orderedScripts = [
	paths.src.js + 'jquery-2.1.1.js',
	paths.src.js + 'moment.js',
	paths.src.js + 'hammerjs/hammer.js',
	paths.src.js + 'angular/angular.js',
	paths.src.js + 'angular-ui/ui-bootstrap.js',
	paths.src.js + 'angular-animate/angular-animate.js',
	paths.src.js + 'angular-aria/angular-aria.js',
	'./node_modules/angular-material/angular-material.js',
	paths.src.js + 'angular-app.js',
	paths.src.js + 'templates/templates.js',
	paths.src.js + 'features/hero-banner.js',
	paths.src.js + 'controllers.js',
	paths.src.js + 'services.js',
	paths.src.js + 'directives.js'
];

gulp.task('scripts-build', ['template-cache'], function() {
	'use strict';

	gulp.src(orderedScripts)
		.pipe(sourcemaps.init())
		.pipe(plumber(function (error) {
			gutil.log(gutil.colors.red(error.message));
			gutil.beep();
			this.emit('end');
		}))
		.pipe(concat('scripts.js'))
		.pipe(sourcemaps.write('js/maps'))
		.pipe(gulp.dest(paths.target.public + 'js'));
});

gulp.task('styles-build', function() {
	'use strict';

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

gulp.task('template-cache', function() {
	'use strict';

	gulp.src(srcRoot + "html/**/*.html")
		.pipe(templateCache({
			module: "mainApp",
			templateHeader: TEMPLATE_HEADER,
			templateFooter: TEMPLATE_FOOTER
		}))
		.pipe(gulp.dest(paths.src.js + "/templates/"));
});

gulp.task('images-copy', function() {
	'use strict';

	gulp.src(paths.src.images + '**/*.*')
		.pipe(plumber(function (error) {
			gutil.log(gutil.colors.red(error.message));
			gutil.beep();
			this.emit('end');
		}))
		.pipe(gulp.dest(paths.target.public + 'images'));
});

gulp.task('views-build', function() {
	'use strict';

	gulp.src(paths.src.views + '**/*.jade')
		.pipe(plumber(function (error) {
			gutil.log(gutil.colors.red(error.message));
			gutil.beep();
			this.emit('end');
		}))
		.pipe(gulp.dest(paths.target.root + 'views'));
});

gulp.task('routes-build', function() {
	'use strict';

	gulp.src(paths.src.routes + '**/*.js')
		.pipe(plumber(function (error) {
			gutil.log(gutil.colors.red(error.message));
			gutil.beep();
			this.emit('end');
		}))
		.pipe(gulp.dest(paths.target.root + 'routes'));
});

gulp.task('server-construct', function() {
	'use strict';

	gulp.src(srcRoot + 'server/**/*')
		.pipe(plumber(function (error) {
			gutil.log(gutil.colors.red(error.message));
			gutil.beep();
			this.emit('end');
		}))
		.pipe(gulp.dest(paths.target.root));
});

gulp.task('build', ['scripts-build', 'styles-build', 'views-build', 'routes-build', 'images-copy', 'server-construct']);
