// 

const eyes = require('eyes')
eyes.defaults.maxLength = 65536
eyes.defaults.showHidden = true
const webpack = require('webpack')
const path = require('path')
const package = require('./package.json')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin



global.NODE_ENV = process.env.NODE_ENV
global.DEVELOPMENT = NODE_ENV == 'development'
global.PRODUCTION = NODE_ENV == 'production'

console.info('process.env.NODE_ENV >')
eyes.inspect(process.env.NODE_ENV)

module.exports = {

	outputDir: 'dist/client',
	dll: DEVELOPMENT, // faster incremental recompilation, slower initial build
	css: { sourceMap: false }, // only enable when needed
	vueLoader: { hotReload: false }, // hot reload makes debugging difficult

	configureWebpack: function(config) {
		config.entry.app = './src/client/main.ts'
		delete config.node.process // required for `got` http client

		if (DEVELOPMENT) {
			config.devtool = 'source-map'
			config.plugins.push(new webpack.WatchIgnorePlugin([/node_modules/, /dist/, /server/, /assets/, /public/, /config/]))
		}

		// bundle size debugger
		// config.plugins.push(new BundleAnalyzerPlugin())

	},

	chainWebpack: function(config) {
		config.plugin('fork-ts-checker').tap(function(args) {
			args[0].tsconfig = '.client.tsconfig.json'
			args[0].workers = Math.ceil(require('os').cpus().length / 2)
			return args
		})
		config.plugins.delete('no-emit-on-errors')
		config.plugin('friendly-errors').tap(function(args) {
			args[0].clearConsole = false // don't clear my terminal/console
			return args
		})
	},

}


