const pluginWithDefaultConfig = require('./util/plugin-with-default-config');
const themeRecursive = require('./util/theme-recursive');

module.exports = pluginWithDefaultConfig(({ addComponents, theme }) => {
  const themeValue = themeRecursive(theme);
  const offset = themeValue(theme('gutenberg.spacing.vertical.default'));

  const group = {
    '.wp-block-group': {
      marginTop: 0,
      marginBottom: 0,
      paddingTop: offset,
      paddingBottom: offset,
      '.wp-block-columns': {
        display: 'flex',
      },
    },
  };

  addComponents([group], { respectPrefix: false });
});
