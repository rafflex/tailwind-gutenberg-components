const pluginWithDefaultConfig = require('./util/plugin-with-default-config');
const themeRecursive = require('./util/theme-recursive');

module.exports = pluginWithDefaultConfig(({ addComponents, theme }) => {
  const themeValue = themeRecursive(theme);

  const colGap = themeValue(theme('gutenberg.spacing.horizontal'));
  const rowGap = themeValue(theme('gutenberg.spacing.vertical.default'));

  const specialAlignment = {
    '.wp-block-embed.alignfull, .wp-block-embed.alignwide': {
      paddingLeft: 0,
      paddingRight: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: rowGap,
      marginBottom: rowGap,

      'iframe, video': {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  };

  const alignLeft = {
    '.wp-block-embed .alignleft': {
      float: 'left',
      maxWidth: '50%',

      iframe: {
        width: '100%',
        paddingRight: colGap,
      },
    },
  };

  const alignRight = {
    '.wp-block-embed .alignRight': {
      float: 'right',
      maxWidth: '50%',

      iframe: {
        width: '100%',
        paddingLeft: colGap,
      },
    },
  };

  const alignNone = {
    '.wp-block-embed:not(.alignleft):not(.alignright):not(.alignfull):not(.alignwide)': {
      width: '100%',

      'iframe, div, span': {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: rowGap,
        paddingBottom: rowGap,
      },
    },
  };

  addComponents([specialAlignment, alignLeft, alignRight, alignNone], {
    respectPrefix: false,
  });
});
