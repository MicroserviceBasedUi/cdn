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

const webcomponentsVersion = JSON.parse(fs.readFileSync('node_modules/webcomponentsjs/package.json')).version;
gutil.log(`Processing webcomponents version ${webcomponentsVersion}`);

const destwebcomponentsFolder = `static/webcomponentsjs/${webcomponentsVersion}`;

gulp.task('del:webcomponents', function () {
    return del([`${destwebcomponentsFolder}/**/*`])
});

gulp.task('copy:webcomponents', function(){
    return gulp.src(['node_modules/webcomponentsjs/**/*'])
        .pipe(gulp.dest(`${destwebcomponentsFolder}`));
});


gulp.task('default', ['del:bootstrap' , 'del:webcomponents', 'copy:bootstrap', 'copy:webcomponents']);
