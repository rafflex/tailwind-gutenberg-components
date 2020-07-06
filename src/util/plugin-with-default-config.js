const plugin = require('tailwindcss/plugin');

const defaultConfig = require('../default-config');

const pluginWithDefaultConfig = (pluginFn) =>
  plugin(pluginFn, { theme: { gutenberg: defaultConfig } });

module.exports = pluginWithDefaultConfig;
