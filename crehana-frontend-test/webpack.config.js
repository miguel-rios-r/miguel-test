const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
   entry: './src/index.tsx',
   output: {
      path: path.join(__dirname, 'dist/'),
      publicPath: '/',
      filename: 'bundle.js'
   },
   devServer: {
      historyApiFallback: true
   },
   resolve: {
      extensions: ['.ts', '.tsx', '.js']
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            use: {
               loader: 'awesome-typescript-loader'
            }
         },
         {
            test: /\.css?$/,
            use: ['css-loader']
         }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './public/index.html'
      })
   ]
}

