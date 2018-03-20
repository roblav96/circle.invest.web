// 

const eyes = require('eyes')
const webpack = require('webpack')



module.exports = {

	outputDir: 'dist/client',
	dll: process.env.NODE_ENV == 'development', // faster incremental recompilation, slower initial build
	css: { sourceMap: false }, // only enable when needed
	// vueLoader: { hotReload: false }, // hot reload can make debugging difficult

	configureWebpack: function(config) {
		config.entry.app = './src/client/main.ts'
		delete config.node.process // required for `got` http client

		if (process.env.NODE_ENV == 'development') {
			config.devtool = 'source-map'
			// config.plugins.push(new webpack.WatchIgnorePlugin([/node_modules/, /dist/, /server/, /assets/, /public/, /config/]))
		}

		// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
		// config.plugins.push(new BundleAnalyzerPlugin())

	},

	chainWebpack: function(config) {
		config.plugin('fork-ts-checker').tap(function(args) {
			args[0].tsconfig = '.client.tsconfig.json'
			return args
		})
		config.plugins.delete('no-emit-on-errors')
		config.plugin('friendly-errors').tap(function(args) {
			args[0].clearConsole = false // don't clear my terminal/console
			return args
		})
	},

}


