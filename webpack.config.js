import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const extractStylesPlugin = new ExtractTextPlugin('[name].css');

export default {
	entry: ['./src/index.js'],
	output: {
		path: __dirname + '/build',
		publicPath: '/',
		filename: '[name].js',
		chunkFilename: '[id].js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				loader: extractStylesPlugin.extract(
					{
						fallback: 'style-loader',
						use: 'css-loader!postcss-loader!sass-loader'
					}
				),
				include: __dirname + '/src/style'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: 'body',
			template: 'src/index.html'
		}),
		extractStylesPlugin
	],
}
