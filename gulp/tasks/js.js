import webpack from "webpack-stream";
import sourcemaps from 'gulp-sourcemaps';

export const js = () => {
	return app.gulp
		.src(app.path.src.js, { sourcemaps: app.isDev })
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'JS',
					message: 'Error: <%= error.message %>',
				})
			)
		)
		.pipe(
			webpack({
				mode: app.isBuild ? 'production' : 'development',
				output: {
					filename: 'main.min.js',
				},
				devtool: app.isDev ? 'source-map' : false,
			})
		)
		.pipe(app.gulp.dest(app.path.build.js, { sourcemaps: app.isDev }))
		.pipe(app.plugins.browsersync.stream())
}
