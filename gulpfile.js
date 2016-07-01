var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat')
var rename = require('gulp-rename');

var staticData = require('./data/static-data.json');

gulp.task('sass', function() {
	gulp.src('public/_sass/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
				.pipe(rename('styles.css'))
        .pipe(gulp.dest('dist/css'));
})

gulp.task('js', function() {
	gulp.src('public/js/*')
				.pipe(uglify())
				.pipe(concat('scripts.js'))
        .pipe(gulp.dest('dist/js'));
})

gulp.task('images', function() {
	gulp.src('public/images/*')
        .pipe(gulp.dest('dist/images'));

	gulp.src('public/images/svg-icons/*')
			.pipe(gulp.dest('dist/images/svg-icons'));
})

gulp.task('enrich', function(){
	options = {
		batch : ['./src/partials'],
		helpers : {
			capitals : function(str){
				return str.toUpperCase();
			}
		}
	}

	return gulp.src('src/main.handlebars')
		.pipe(handlebars(staticData, options))
		.pipe(rename('index.html'))
		.pipe(gulp.dest('dist'));
})

gulp.task('default', function () {
	gulp.start('sass');
	gulp.start('js');
	gulp.start('images');
	gulp.start('enrich');
});

gulp.task('watch', function() {
	gulp.start('default');

	gulp.watch([
		 'src/*',
		 'src/partials/*',
		 'public/_sass/*',
		 'public/js/*'
  ], ['default']);

})
