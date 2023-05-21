"use strict";

const gulp = require("gulp");
const browsersync = require("browser-sync");
const webpack = require("webpack-stream");

const dist = "./dist/";

gulp.task("copy-html", () => {
    return gulp.src("./src/index.html")
                .pipe(gulp.dest(dist))
                .pipe(browsersync.stream());
});

gulp.task("copy-assets", () => {
    return gulp.src("./src/assets/**/*.*")
                .pipe(gulp.dest(dist + "/assets"))
                .on("end", browsersync.reload);
});

gulp.task("compile-js", () => {
    return gulp.src("./src/js/main.js") // Путь к вашему основному JS-файлу
                .pipe(webpack(require('./webpack.config.js')))
                .pipe(gulp.dest(dist + "/js"))
                .on("end", browsersync.reload);
});

gulp.task("watch", () => {
    browsersync.init({
		server: "./dist/",
		port: 4000,
		notify: true
    });
    
    gulp.watch("./src/index.html", gulp.parallel("copy-html"));
    gulp.watch("./src/assets/**/*.*", gulp.parallel("copy-assets"));
    gulp.watch("./src/js/**/*.js", gulp.parallel("compile-js")); // Добавлено слежение за изменениями JS файлов
});

gulp.task("build", gulp.parallel("copy-html", "copy-assets", "compile-js")); // Добавлен вызов задачи compile-js при сборке

gulp.task("default", gulp.parallel("watch", "build"));
