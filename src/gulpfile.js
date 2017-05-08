const gulp = require('gulp');
const del = require('del');
const fs = require('fs');
const gutil = require('gulp-util');

// Bootstrap handling

const bootstrapVersion = JSON.parse(fs.readFileSync('node_modules/bootstrap/package.json')).version;
gutil.log(`Processing Bootstrap version ${bootstrapVersion}`);

const destFolder = `static/bootstrap/${bootstrapVersion}`;

gulp.task('del:bootstrap', function () {
    return del([`${destFolder}/**/*`])
});

gulp.task('copy:bootstrap', function(){
    return gulp.src(['node_modules/bootstrap/dist/**/*'])
        .pipe(gulp.dest(`${destFolder}`));
});

gulp.task('default', ['del:bootstrap' ,'copy:bootstrap']);
