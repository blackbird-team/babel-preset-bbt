import transformClassProperties from "babel-plugin-transform-class-properties";
import rootImport from "babel-plugin-root-import";
import reactPreset from "babel-preset-react";
import minifyPreset from "babel-preset-minify";
import envPreset from "babel-preset-env";

const defaultTargets = {
	android: 30,
	chrome: 35,
	edge: 14,
	explorer: 9,
	firefox: 52,
	safari: 8,
	ucandroid: 1
};

const defaultRoots = [
	{
		rootPathPrefix: "~",
		rootPathSuffix: "source/js"
	},
	{
		rootPathPrefix: "@",
		rootPathSuffix: "source/data"
	}
];

const collectPresets = options => {
	const presets = [];
	if (options.minify) presets.push(minifyPreset);
	if (options.react) presets.push(reactPreset);
	presets.push([
		envPreset,
		{
			targets: (options && options.targets) || defaultTargets
		}
	]);

	return presets;
};

export default (context, options) => ({
	presets: collectPresets(options),
	plugins: [
		[transformClassProperties],
		[rootImport, (options && options.roots) || defaultRoots]
	]
});
