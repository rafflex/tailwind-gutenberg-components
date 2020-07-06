const pluginWithDefaultConfig = require('./util/plugin-with-default-config');

module.exports = pluginWithDefaultConfig(({ addComponents }) => {
  const embeds = {};

  addComponents([embeds], { respectPrefix: false });
});
