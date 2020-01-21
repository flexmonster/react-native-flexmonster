
var path = require('path');
module.exports = [{
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2' // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
                "@babel/preset-env",
                "@babel/preset-react"
            ],
            "plugins": [
                [
                  "@babel/plugin-proposal-class-properties"
                ]
            ]
          }
        }
        // loader: 'babelify',
        // query: {
        //   presets: ['es2015', 'react']
        // }
      }
    ]
  },
  externals: {
    'react': 'commonjs react', // this line is just to use the React dependency of our parent-testing-project instead of using our own React
    "react-native": "commonjs react-dom",
    "react-native-webview": "commonjs react-dom",
    'flexmonster': 'commonjs flexmonster',
    'prop-types': 'commonjs prop-types'
  }
}];
