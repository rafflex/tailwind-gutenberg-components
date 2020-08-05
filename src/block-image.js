const pluginWithDefaultConfig = require('./util/plugin-with-default-config');
const themeRecursive = require('./util/theme-recursive');

module.exports = pluginWithDefaultConfig(({ addComponents, theme }) => {
  const themeValue = themeRecursive(theme);

  const colGap = themeValue(theme('gutenberg.spacing.horizontal'));

  const specialAlignments = {
    '.wp-block-image.alignfull, .wp-block-image.alignwide': {
      paddingLeft: 0,
      paddingRight: 0,
      marginLeft: 'auto',
      marginRight: 'auto',

      img: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  };

  const alignLeft = {
    '.wp-block-image .alignleft': {
      float: 'left',
      maxWidth: '50%',

      img: {
        width: '100%',
        paddingRight: colGap,
      },
    },
  };

  const alignRight = {
    '.wp-block-image .alignright': {
      float: 'right',
      maxWidth: '50%',

      img: {
        width: '100%',
        paddingLeft: colGap,
      },
    },
  };

  addComponents([alignLeft, alignRight], { respectPrefix: false });

  if (theme('gutenberg.supports.wideAlignments')) {
    addComponents(specialAlignments, { respectPrefix: false });
  }
});
