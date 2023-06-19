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
    htmlProd() {
        return $.gulp.src($.path.html.project.src)
            .pipe($.gp.plumber({
                errorHandler: $.gp.notify.onError()
            }))
            .pipe($.gp.fileInclude())
            .pipe($.gp.webpHtml())
            .pipe($.gp.size({ title: "До сжатия" }))
            .pipe($.gp.htmlmin($.app.htmlmin))
            .pipe($.gp.size({title: "После сжатия"}))
            .pipe($.gulp.dest($.path.html.project.dest));
    }
}

module.exports = html;