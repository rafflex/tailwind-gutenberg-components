const pluginWithDefaultConfig = require('./utils/plugin-with-default-config');

module.exports = pluginWithDefaultConfig(({ addComponents }) => {
  const embeds = {};

  addComponents([embeds]);
});
