var gulp = require('gulp');
var markdown = require('gulp-markdown');

// marked.setOptions({
//   highlight: function (code) {
//     return require('highlight.js').highlightAuto(code).value;
//   }
// });

gulp.task('markdown', function () {
  return gulp.src('src/markdown/**/*.md')
    .pipe(markdown())
    .pipe(gulp.dest('src/assets/'));
});

gulp.task('default', ['markdown'], function () {
  gulp.watch('src/markdown/*.md', ['markdown']);
});
