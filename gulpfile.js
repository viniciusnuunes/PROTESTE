// gulp.task = Define uma tarefa
// gulp.src = Define o caminho dos arquivos que serão manipulados
// gulp.dest = Define o destino dos arquivos manipulados
// gulp.watch = Utilizado para observar mudanças em arquivos
// gulp.pipe = Utilizado para dar continuidade na execução das tarefas

var gulp = require('gulp');
var concat = require('gulp-concat');
var renamce = require('gulp-rename');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync')

gulp.task('default', ['lib', 'watch', 'server'])

gulp.task('server', function(){
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  });
});

gulp.task('lib', function(){
  return gulp.src(['./node_modules/jquery/dist/jquery.min.js',
                   './node_modules/bootstrap/dist/js/bootstrap.min.js'])
  .pipe(concat('lib.js'))
  .pipe(gulp.dest('./dist/lib'));
});

gulp.task('watch', function(){
  gulp.watch('./dist/css/*.css').on('change', browserSync.reload);
  gulp.watch('./dist/js/*.js').on('change', browserSync.reload);
  gulp.watch('./dist/*.html').on('change', browserSync.reload);
});