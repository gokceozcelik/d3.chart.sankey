"use strict";
var webpack = require("webpack");

var pkg = require("../package.json");
var now = new Date();

function pad(num) {
	return (num < 10 ? "0" : "") + num;
}

var banner = [
	pkg.name + " - v" + pkg.version,
	"License: " + pkg.license,
	"Date: " + now.getFullYear() + "-" + pad(now.getMonth()) + "-" +
		pad(now.getDate())
].join("\n");

module.exports = {
	context: "src",
	entry: "./index",
	output: {
		libraryTarget: "umd"
	},
	plugins: [
		new webpack.BannerPlugin(banner)
	],
	externals: {
		"d3": true,
		"d3-plugins-sankey": true,
		"d3.chart": {
			"root": ["d3", "chart"],
			"commonjs": "d3.chart",
			"commonjs2": "d3.chart",
			"amd": "d3.chart"
		}
	}
};
