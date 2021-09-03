const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

/**
 * @type {import('webpack').Configuration}
 * @type {import('terser-webpack-plugin').Configuration}
 */
module.exports = (env) => {
  const prod = !!env.production;
  return {
    mode: 'development',
    entry: './src/index.ts',
    output: {
      path: path.resolve(__dirname, prod ? 'docs/scripts' : 'public/scripts'),
      filename: 'main_webpack.js'
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    devtool: prod ? false : 'source-map',
    optimization: {
      minimize: prod,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: prod,
            sourceMap: !prod,
          },
        }),
      ],
    },
  };
};
