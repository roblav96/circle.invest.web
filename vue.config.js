// 
global.NODE_ENV = process.env.NODE_ENV
global.DEVELOPMENT = NODE_ENV == 'development'
global.PRODUCTION = NODE_ENV == 'production'
// 

const eyes = require('eyes')
const webpack = require('webpack')



module.exports = {

	outputDir: 'dist/client',
	dll: DEVELOPMENT, // faster incremental recompilation, slower initial build
	css: { sourceMap: false }, // only enable when needed
	vueLoader: { hotReload: false }, // hot reload can make debugging difficult

	configureWebpack: function(config) {
		config.entry.app = './src/client/main.ts'
		delete config.node.process // required for `got` http client

		if (DEVELOPMENT) {
			config.devtool = 'source-map'
			config.module.rules.filter(rule => Array.isArray(rule.use)).forEach(function(rule) {
				rule.use.filter(use => use.loader == 'url-loader').forEach(function(use) {
					use.loader = 'file-loader'; delete use.options.limit;
				})
			})
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


