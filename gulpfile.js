const gulp = require('gulp');
const del = require('del');
const fs = require('fs');
const gutil = require('gulp-util');

let bootstrapVersion = JSON.parse(fs.readFileSync('node_modules/bootstrap/package.json')).version;

gutil.log(`Processing Bootstrap version ${bootstrapVersion}`);

gulp.task('del:bootstrap', function () {
    return del([`static/bootstrap/${bootstrapVersion}/**/*`])
});

gulp.task('copy:bootstrap', function(){
    gulp.src(['node_modules/bootstrap/dist/*'])
        .pipe(gulp.dest(`static/bootstrap/${bootstrapVersion}`));
});

gulp.task('default', ['del:bootstrap' ,'copy:bootstrap']);