const { 
    src,
    dest,
    watch,
    parallel,
    series,
    gulp
 } = require('gulp')
//SASS 
const sass = require('gulp-sass')(require('sass'))
const sassGlob = require('gulp-sass-glob')
const postcss = require('gulp-postcss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const normalize = require('postcss-normalize')
const size = require('gulp-size')
const sourceMaps = require('gulp-sourcemaps')
const sortMediaQueries = require('postcss-sort-media-queries')

//clean
const clean = require('gulp-clean')

// Javascript
const terser = require('gulp-terser')
const concat = require('gulp-concat')

//Image
const imagemin = require('gulp-imagemin')
const newer = require('gulp-newer')


const compileSass = () => {
    var plugins = [
        cssnano(),
        autoprefixer(),
        normalize(),
        sortMediaQueries({
            sort: 'mobile-first'
        }),
    ]
    return src('./src/scss/**/*.scss')
    .pipe(sourceMaps.init())
    .pipe(sassGlob())
    .pipe(sass({
        outputStyle:'compressed'

    }).on('error', sass.logError))
    .pipe(postcss(
        plugins,
    ))
    .pipe(size({
        showFiles: true,
    }))
    .pipe(sourceMaps.write('.'))
    .pipe(dest('./public/css/'))
}

const compileJs = () => {
    return src('./src/js/**/*.js')
    .pipe(sourceMaps.init())
    .pipe(terser())
    .pipe(sourceMaps.write())
    .pipe(concat('compiled.js'))
    .pipe(dest('./public/js/'))
}

const compileImage = () => {
    return src('./src/images/**')
    .pipe(newer('./public/images/'))
    .pipe(imagemin())
    .pipe(dest('./public/images'))
}


const cleanFile = () => {
    return src('./public/', {read: false})
    .pipe(clean({force: true}))
}

const watchFiles = () =>{
    watch('./src/scss/**/*.scss', compileSass)
    watch('./src/js/**/*.js', compileJs)
    watch('./src/images/**', compileImage)
}

exports.clean = cleanFile
exports.build = series(compileSass, compileJs, compileImage)
exports.rebuild = series(cleanFile, series(compileSass, compileJs, compileImage))
exports.watch = watchFiles