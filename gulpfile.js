const gulp = require('gulp');
const child = require('child_process');
const browserSync = require('browser-sync').create();
const gutil = require('gulp-util');
const jekyllCommand = process.platform === "win32" ? "jekyll.bat" : "jekyll";
const siteRoot = '_site';

gulp.task('jekyll', () => {
    const jekyll = child.spawn(jekyllCommand, ['build',
        '--watch',
        '--incremental',
        '--drafts'
    ]);

    const jekyllLogger = (buffer) => {
    buffer.toString()
        .split(/\n/)
        .forEach((message) => gutil.log('Jekyll: ' + message));
    };

    jekyll.stdout.on('data', jekyllLogger);
    jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('serve', () => {
    browserSync.init({
        files: [siteRoot + '/**'],
        port: 4000,
        server: {
        baseDir: siteRoot
        }
    });
});

gulp.task('default', ['jekyll', 'serve']);