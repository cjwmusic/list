var path = require('path');

module.exports = {
	entry : [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
		path.resolve(__dirname, 'app/main.js')
	],
	module:{
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loaders: [
					'babel?presets[]=stage-0,presets[]=react,presets[]=es2015'
				]
			},

			{ test: /\.css$/, loader: 'style/useable!css' },
			{ test: /\.less$/, loader: 'style!css!less' }
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.css']
	},
	output : {
		path : path.resolve(__dirname, 'build'),
 		filename : 'bundle.js',
	}
};
