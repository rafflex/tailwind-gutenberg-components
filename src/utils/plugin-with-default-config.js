const plugin = require('tailwindcss/plugin');

const defaultConfig = require('../default-config');

module.exports = function pluginWithDefaultConfig(pluginFn) {
  return plugin(pluginFn, { gutenberg: defaultConfig });
};
