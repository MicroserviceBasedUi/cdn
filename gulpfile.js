const gulp = require('gulp');
const del = require('del');

// read version from bootstrap package.json
let bootstrapVersion = '3.3.7';

gulp.task('del:bootstrap', function () {
    return del([`static/bootstrap/${bootstrapVersion}/**/*`])
});

gulp.task('copy:bootstrap', function(){
    gulp.src(['node_modules/bootstrap/dist/*'])
        .pipe(gulp.dest(`static/bootstrap/${bootstrapVersion}`));
});

gulp.task('default', ['del:bootstrap' ,'copy:bootstrap']);