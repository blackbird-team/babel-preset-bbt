import envPreset from "@babel/preset-env";
import reactPreset from "babel-preset-react";
import minifyPreset from "babel-preset-minify";
import rootImport from "babel-plugin-root-import";
import tsPreset from "@babel/preset-typescript";
import transformClassProperties from "@babel/plugin-proposal-class-properties";
import proposalObjectRestSspread from "@babel/plugin-proposal-object-rest-spread";

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

const env = options => {
	let opt = {};

	if (options && options.env) opt = options.env;
	if (options && options.targets) opt.targets = options.targets;
	else opt.targets = defaultTargets;

	return [envPreset, opt];
};

const collectPresets = options => {
	const presets = [];
	if (options.minify) presets.push(minifyPreset);
	if (options.react) presets.push(reactPreset);
	presets.push(env(options));

	return presets;
};

const collectJs = options => ({
	presets: collectPresets(options),
	plugins: [[transformClassProperties], [rootImport, (options && options.roots) || defaultRoots]]
});

const collectTs = options => ({
	presets: [tsPreset, env(options)],
	plugins: [[transformClassProperties], [proposalObjectRestSspread]]
});

export default (context, options) => (options && options.lang === "js" ? collectJs(options) : collectTs(options));
