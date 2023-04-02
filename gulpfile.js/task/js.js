// Обработка JavaScript
const js = {
    js() {
        return $.gulp.src($.path.js.src, { sourcemaps: $.app.isDev })
            .pipe($.gp.plumber({
                errorHandler: $.gp.notify.onError()
            }))
            .pipe($.gp.babel())
            .pipe($.webpack($.app.webpack))
            // .pipe(uglify()) не нужен так как используем webpack
            .pipe($.gulp.dest($.path.js.dest, { sourcemaps: $.app.isDev }));
    },
    jsProd() {
        return $.gulp.src($.path.js.project.src, { sourcemaps: $.app.isDev })
            .pipe($.gp.plumber({
                errorHandler: $.gp.notify.onError()
            }))
            .pipe($.gp.babel())
            .pipe($.webpack($.app.webpack))
            // .pipe(uglify()) не нужен так как используем webpack
            .pipe($.gulp.dest($.path.js.project.dest, { sourcemaps: $.app.isDev }));
    },
    jsVikings() {
        return $.gulp.src($.path.js.vikings.src, { sourcemaps: $.app.isDev })
            .pipe($.gp.plumber({
                errorHandler: $.gp.notify.onError()
            }))
            .pipe($.gp.babel())
            .pipe($.webpack($.app.webpack))
            // .pipe(uglify()) не нужен так как используем webpack
            .pipe($.gulp.dest($.path.js.vikings.dest, { sourcemaps: $.app.isDev }));
    }
}

module.exports = js;
