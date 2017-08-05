const commonConfig = require('./build-utils/webpack.common');
const webpackMerge = require('webpack-merge');

//addon feature
const addons = (addonArgs) => {
  let addons = []
      .concat.apply([], [addonArgs]) //Normalize array of addons (flatten)
      .filter(Boolean); // If addons is undefined, filter it out
    return addons.map((addonName) => require(`./build-utils/addons/webpack.${addonName}.js`))
};

module.exports = (env) => {
  console.log(env);
  const envConfig = require(`./build-utils/webpack.${env.env}.js`);
  return webpackMerge(commonConfig, envConfig, ...addons(env.addons));
  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ['css-loader', 'style-loader'],
        },
        {
          test: /\.jpe?g$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
              },
            },
          ],
        },
      ],
    },
  };
};
