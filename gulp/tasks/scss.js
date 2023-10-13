import dartSass from 'sass'
import gulpSass from 'gulp-sass'
const sass = gulpSass(dartSass)
import rename from 'gulp-rename'
import cleanCss from 'gulp-clean-css'
import webpcss from 'gulp-webpcss'
import autoPrefixer from 'gulp-autoprefixer'
import groupCssMediaQueries from 'gulp-group-css-media-queries'

export const scss = () => {
	return app.gulp
		.src(app.path.src.scss, { sourcemaps: app.isDev })
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'SCSS',
					message: 'Error: <%= error.message %>',
				})
			)
		)
		.pipe(
			sass({
				outputStyle: 'expanded',
			})
		)
		.pipe(app.plugins.replace(/@img\//g, '../img/'))
		.pipe(app.plugins.if(app.isBuild, groupCssMediaQueries()))
		.pipe(
			app.plugins.if(
				app.isBuild,
				webpcss({
					webpClass: '.webp',
					noWebpClass: '.no-webp',
				})
			)
		)
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.if(app.isBuild, cleanCss()))
		.pipe(
			app.plugins.if(
				app.isBuild,
				autoPrefixer({
					grid: true,
					overrideBrowserslist: ['last 3 versions'],
					cascade: true,
				})
			)
		)
		.pipe(rename({ suffix: '.min' }))
		.pipe(app.gulp.dest(app.path.build.css, { sourcemaps: app.isDev }))
		.pipe(app.plugins.browsersync.stream())
}
