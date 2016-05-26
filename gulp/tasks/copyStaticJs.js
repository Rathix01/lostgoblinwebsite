var gulp         = require('gulp');
var config       = require('../config').markup

gulp.task('copyStaticJs', function() {
  gulp.src('./src/staticjs/**/*')
    .pipe(gulp.dest(config.dest));
});

gulp.task('copyUserContent', function() {
  gulp.src('./src/javascript/content/**/*')
    .pipe(gulp.dest(config.dest + '/content'))
}); 