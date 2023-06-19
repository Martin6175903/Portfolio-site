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
    imgProd() {
        return $.gulp.src($.path.img.project.src)
            .pipe($.gp.plumber({
                errorHandler: $.gp.notify.onError()
            }))
            .pipe($.gp.newer($.path.img.project.dest))
            .pipe($.gp.webp())
            .pipe($.gulp.dest($.path.img.project.dest))
            .pipe($.gulp.src($.path.img.project.src))
            .pipe($.gp.newer($.path.img.project.dest))
            .pipe($.gp.imagemin($.app.imagemin))
            .pipe($.gulp.dest($.path.img.project.dest));
    }
}

module.exports = img;
