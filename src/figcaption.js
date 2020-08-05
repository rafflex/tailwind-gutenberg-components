const pluginWithDefaultConfig = require('./util/plugin-with-default-config');
const themeRecursive = require('./util/theme-recursive');

module.exports = pluginWithDefaultConfig(({ addComponents, theme }) => {
  const themeValue = themeRecursive(theme);

  const colGap = themeValue(theme('gutenberg.spacing.horizontal'));
  const rowGap = themeValue(theme('gutenberg.spacing.vertical.default'));

  const figCaption = {
    '.alignfull, .alignwide': {
      figcaption: {
        paddingTop: colGap,
        paddingBottom: 0,
        textAlign: themeValue(theme('gutenberg.figCaption.align.wide')),
      },
    },

    '.alignleft': {
      figcaption: {
        textAlign: theme('gutenberg.figCaption.align.left'),
        padding: `${colGap} ${rowGap} ${colGap} 0`,
      },
    },

    '.aligncenter': {
      figcaption: {
        textAlign: theme('gutenberg.figCaption.align.left'),
        padding: `${colGap} ${rowGap} ${colGap} 0`,
      },
    },

    '.alignright': {
      figcaption: {
        textAlign: theme('gutenberg.figCaption.align.right'),
        padding: `${colGap} ${rowGap} ${colGap} 0`,
      },
    },
  };

  addComponents([figCaption], { respectPrefix: false });
});
