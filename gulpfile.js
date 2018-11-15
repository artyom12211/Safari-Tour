var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');

gulp.src('./src/*.ext')
    .pipe(plumber())
    .pipe(gulp.dest('./dist'));


gulp.task('sass', function(){
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream:true}))
});

gulp.src('./src/*.ext')
    .pipe(plumber())
    .pipe(gulp.dest('./dist'));


gulp.task('browser-sync', function()  {
	browserSync({
		server: {
			baseDir: 'app'
		}, 
	    }); 
});

gulp.src('./src/*.ext')
    .pipe(plumber())
    .pipe(gulp.dest('./dist'));


gulp.task('watch', ['browser-sync', 'sass'], function(){
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
});

gulp.task('default', function () {
    return gulp.src('src/app.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'));
});

gulp.src('./src/*.ext')
    .pipe(plumber())
    .pipe(gulp.dest('./dist'));