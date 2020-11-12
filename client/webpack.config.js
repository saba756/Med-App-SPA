
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
var webpackConfig = {
  entry: {
    main: './src/main.ts'
  }, resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'src', 'dist'),
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: ['ts-loader', 'angular2-template-loader']
    },
    {
      test: /\.html$/,
      use: 'html-loader'
    },
    {
      test: /\.css$/,
      use: [
        'to-string-loader', 'css-loader',
      ],
    },
    ]
  },
  // devServer: {
  //   writeToDisk: true
  // },
};

//  plugins: [
//   new HtmlWebpackPlugin({
//       template: './src/ui.html',
//       filename: 'ui.html',
//       inlineSource: '.(js)$',
//       chunks: ['ui'],
//   }),
//      new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin)
// ]

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
},
// new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin)
);

webpackConfig.plugins = [
  htmlWebpackPlugin,
];
module.exports = webpackConfig;
