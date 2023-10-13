import { deleteAsync } from "del";
import zipPlagin from "gulp-zip";

export const zip = () => {
	deleteAsync(`./${app.path.rootFolder}.zip`)
	return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
	.pipe(zipPlagin(`${app.path.rootFolder}.zip`))
	.pipe(app.gulp.dest('./'));
}