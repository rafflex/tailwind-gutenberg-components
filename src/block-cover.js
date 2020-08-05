const pluginWithDefaultConfig = require('./util/plugin-with-default-config');
const themeRecursive = require('./util/theme-recursive');

module.exports = pluginWithDefaultConfig(({ addComponents, theme }) => {
  const themeValue = themeRecursive(theme);

  const options = theme('gutenberg.blocks.cover');

  const cover = {
    '.wp-block-cover': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      backgroundSize: 'cover',
      padding: 0,

      '.wp-block-cover__inner-container': {
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        height: '100%',
        paddingTop: themeValue(options.verticalPadding),
        paddingBottom: themeValue(options.verticalPadding),
        backgroundColor: 'inherit',
        zIndex: theme('zIndex')['10'],
        color: theme('colors').white,

        '*': {
          position: 'relative',
          color: themeValue(options.contentColor),
          zIndex: themeValue(options.zIndex),
          paddingBottom: themeValue(options.itemsSpacing),
          textAlign: 'center',
        },
      },

      '&.has-parallax': {
        backgroundAttachment: 'fixed',
        '@supports (-webkit-overflow-scrolling: touch)': {
          backgroundAttachment: 'scroll',
        },
      },
    },
  };

  addComponents([cover], { respectPrefix: false });
});
