// Обработка HTML
const html = {
    html() {
    return $.gulp.src($.path.html.src)
        .pipe($.gp.plumber({
            errorHandler: $.gp.notify.onError()
        }))
        .pipe($.gp.fileInclude())
        .pipe($.gp.webpHtml())
        .pipe($.gp.size({ title: "До сжатия" }))
        .pipe($.gp.htmlmin($.app.htmlmin))
        .pipe($.gp.size({title: "После сжатия"}))
        .pipe($.gulp.dest($.path.html.dest));
    },
    htmlMozilor() {
        return $.gulp.src($.path.html.mozilor.src)
            .pipe($.gp.plumber({
                errorHandler: $.gp.notify.onError()
            }))
            .pipe($.gp.fileInclude())
            .pipe($.gp.webpHtml())
            .pipe($.gp.size({ title: "До сжатия" }))
            .pipe($.gp.htmlmin($.app.htmlmin))
            .pipe($.gp.size({title: "После сжатия"}))
            .pipe($.gulp.dest($.path.html.mozilor.dest));
    }
}

module.exports = html;