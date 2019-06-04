import gulp from "gulp";
import webpack from "webpack-stream";
import babel from "gulp-babel";
import ts from "gulp-typescript";
import sourcemaps from "gulp-sourcemaps";

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
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(webpack({
      mode : 'production',
      output: {
        filename : 'index.js'
      },
      devtool: 'source-map'
    }))
    .pipe(gulp.dest("dist/"));
});

gulp.task("default", gulp.series(
  "compile",
  "bundle"
));