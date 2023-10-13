import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
	build: {
		css: `${buildFolder}/css`,
		js: `${buildFolder}/js`,
		images: `${buildFolder}/img`,
		files: `${buildFolder}/`,
		html: `${buildFolder}/`,
		fonts: `${buildFolder}/fonts`,
	},
	src: {
		scss: `${srcFolder}/scss/main.scss`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,ico}`,
		svg: `${srcFolder}/img/**/*.svg`,
		js: `${srcFolder}/js/main.js`,
		html: `${srcFolder}/*.html`,
		files: `${srcFolder}/files/**/*.*`,
		svgicons: `${srcFolder}/svgicons/*.svg`,
	},
	watch: {
		scss: `${srcFolder}/**/*.scss`,
		files: `${srcFolder}/files/**/*.*`,
		html: `${srcFolder}/**/*.html`,
		js: `${srcFolder}/js/**/*.js`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
		svgicons: `${srcFolder}/svgicons/*.svg`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``,
}