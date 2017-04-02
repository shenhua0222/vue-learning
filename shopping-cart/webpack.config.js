var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: path.join(__dirname, './src/main.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist/',
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.(jpg|png|gif|svg)$/,
				loader: 'file-loader' 
			}
		]
	},
	devtool: '#eval-source-map' ,
	devServer: {
		historyApiFallback: true,
		noInfo: true,
		inline: true,
		port: 8081
	},
	resolve: {
		alias: {
			"vue": "vue/dist/vue.js"
		}
	}
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vuejs.github.io/vue-loader/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ])
}