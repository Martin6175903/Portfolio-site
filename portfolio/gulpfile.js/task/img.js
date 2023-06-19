// Обработка Images
const img = {
    img() {
        return $.gulp.src($.path.img.src)
            .pipe($.gp.plumber({
                errorHandler: $.gp.notify.onError()
            }))
            .pipe($.gp.newer($.path.img.dest))
            .pipe($.gp.webp())
            .pipe($.gulp.dest($.path.img.dest))
            .pipe($.gulp.src($.path.img.src))
            .pipe($.gp.newer($.path.img.dest))
            .pipe($.gp.imagemin($.app.imagemin))
            .pipe($.gulp.dest($.path.img.dest));
    },
    imgMozilor() {
        return $.gulp.src($.path.img.mozilor.src)
            .pipe($.gp.plumber({
                errorHandler: $.gp.notify.onError()
            }))
            .pipe($.gp.newer($.path.img.mozilor.dest))
            .pipe($.gp.webp())
            .pipe($.gulp.dest($.path.img.mozilor.dest))
            .pipe($.gulp.src($.path.img.mozilor.src))
            .pipe($.gp.newer($.path.img.mozilor.dest))
            .pipe($.gp.imagemin($.app.imagemin))
            .pipe($.gulp.dest($.path.img.mozilor.dest));
    }
}

module.exports = img;
