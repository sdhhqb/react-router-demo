var webpack = require("webpack");
var path = require("path");

var config = {
	entry: './index.js',

	output: {
		path: './build/',
		filename: 'bundle.js',
		publicPath: '/build/',
		chunkFilename: "[id].bundle.js"
	},

	module: {
		loaders: [
			{
				test: /\.js$/, 
				include: [
					path.resolve(__dirname, "")
				],
				exclude: [
					path.resolve(__dirname, "build"),
					path.resolve(__dirname, "node_modules")
				],
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react'],
					plugins: []
				}
			}
		]
	},

	plugins: []
};

// var env = process.env.NODE_ENV;
// console.log("node env: \x1b[32m" + env + "\x1b[0m");

module.exports = config;