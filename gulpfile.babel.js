import gulp from "gulp";
import webpack from "webpack-stream";
import babel from "gulp-babel";
import ts from "gulp-typescript";

gulp.task("compile",() => {
  console.log("building `src/` -> `build/`");
  const project = ts.createProject("./tsconfig.json");
  return project.src()
    .pipe(project())
    .js
    .pipe(babel())
    .pipe(gulp.dest("build/"));
});

gulp.task("bundle",() => {
  console.log("bundling `build/` -> `dist/`");
  return gulp.src("build/index.js")
    .pipe(webpack({
      mode : 'production',
      output: {
        filename : 'index.js'
      }
    }))
    .pipe(gulp.dest("dist/"));
});

gulp.task("default", gulp.series(
  "compile",
  "bundle"
));