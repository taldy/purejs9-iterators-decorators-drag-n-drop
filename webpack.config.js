module.exports = {
  mode: "development",
  devtool: "(none)",
  entry: {
    iterators: './src/01-iterators',
    decorators: './src/02-decorators',
    'drag-n-drop': './src/03-drag-n-drop',
  },
  output: {
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage"
                }
              ]
            ],
            plugins: [
              ["@babel/plugin-proposal-decorators", { "decoratorsBeforeExport": true, legacy: false }],
              // ["@babel/plugin-proposal-decorators", { legacy: false }],
            ]
          }
        }
      }
    ]
  }
};
