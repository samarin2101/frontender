import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	path: path,
	gulp: gulp,
	plugins: plugins,
}

import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { otfToTtf, ttfToWoff, fontStyle } from './gulp/tasks/fonts.js';
import { svgSprive } from './gulp/tasks/svgSprive.js';
import { zip } from './gulp/tasks/zip.js';
import { ftp } from './gulp/tasks/ftp.js';

function watcher () {
	gulp.watch(app.path.watch.files, copy);
	gulp.watch(app.path.watch.html, html);
	gulp.watch(app.path.watch.scss, scss);
	gulp.watch(app.path.watch.js, js);
	gulp.watch(app.path.watch.images, images);
	gulp.watch(app.path.watch.svgicons, svgSprive)

}



const fonts = gulp.series(otfToTtf, ttfToWoff, fontStyle)

const mainTasks = gulp.series(fonts,gulp.parallel(copy, html, scss, js, images, svgSprive)
)

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher,server));
const build = gulp.parallel(reset,mainTasks);
const deployZIP = gulp.series(reset,mainTasks,zip);
const deployFTP = gulp.series(reset,mainTasks,ftp);

export { dev }
export { build }
export { deployZIP }
export {deployFTP}

gulp.task('default', dev);