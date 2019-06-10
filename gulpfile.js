const { src, dest, series } = require("gulp");
const flatten = require("gulp-flatten");
const rename = require("gulp-rename");
const del = require("del");

function flattenIcons() {
  return src("*/svg/design/*_24px.svg")
    .pipe(flatten())
    .pipe(
      rename(function(path) {
        path.basename = path.basename.replace(/^ic_/, "").replace(/_24px$/, "");
      })
    )
    .pipe(dest("dist/icons"));
}

function clean() {
  return del(["dist"]);
}

exports.clean = clean;
exports.default = series(clean, flattenIcons);
