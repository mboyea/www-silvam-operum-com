const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js')

module.exports = (envVars) => {
  const {env} = envVars;
  const envConfig = require(`./webpack.config.${env}.js`);
  const evaluatedConfig = merge(commonConfig, envConfig);
  return evaluatedConfig;
}