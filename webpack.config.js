const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

const config = {
	entry: path.resolve(__dirname, "./src/index.tsx"),
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
		alias: {
			"@images": path.resolve(__dirname, "./src/assets/images/"),
			"@fonts": path.resolve(__dirname, "./src/assets/fonts/"),
			"@components": path.resolve(__dirname, "./src/components/"),
			"@utils": path.resolve(__dirname, "./src/utils/"),
			"@views": path.resolve(__dirname, "./src/views/"),
			"@customTypes": path.resolve(__dirname, "./src/types/"),
			"@store": path.resolve(__dirname, "./src/store/"),
			"@icons": path.resolve(__dirname, "./src/icons/")
		}
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: ["ts-loader"]
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader", "postcss-loader"]
			},
			{
				test: /\.s[ac]ss$/,
				use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"]
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: "asset/resource"
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf)$/,
				type: "asset/inline"
			},
			{
				test: /\.svg$/,
				use: ["@svgr/webpack"],
				issuer: /\.tsx?$/
			}
		]
	},
	output: {
		path: path.resolve(__dirname, "./build"),
		filename: "bundle.js",
		publicPath: '/'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "./src/index.html")
		}),
		new ESLintWebpackPlugin({
			extensions: ["js", "tsx", "ts"]
		}),
		new CleanWebpackPlugin()
	]
};

module.exports = (env, argv) => {
	if (argv.mode === "development") {
		config.devtool = "eval-source-map";
		config.devServer = {
			port: 3000,
			open: true,
			historyApiFallback: true
		};
		config.plugins = [
			...config.plugins,
			new ReactRefreshWebpackPlugin(),
			new webpack.DefinePlugin({
				"process.env.API_URL": JSON.stringify("http://helping-hand.tech:333/")
			})
		];
	}

	if (argv.mode === "production") {
		config.devtool = "source-map";
	}

	return config;
};
