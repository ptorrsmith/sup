module.exports = {
    entry: './client/index.js',
    output: {
      path: __dirname + '/public',
      filename: 'bundle.js'
    },
    module: {
      rules: [{
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          // exclude: /node_modules/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
    mode: 'development'
  }