module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, use: {loader: 'url-loader?limit=100000'} }
    ]
  },
};


