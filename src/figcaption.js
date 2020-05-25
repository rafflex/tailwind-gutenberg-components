const pluginWithDefaultConfig = require('./utils/plugin-with-default-config');

module.exports = pluginWithDefaultConfig(({ addComponents, theme }) => {
  const figCaption = {
    '.alignfull, .alignwide': {
      figcaption: {
        paddingTop: theme('gutenberg.spacing.horizontal'),
        paddingBottom: 0,
        textAlign: theme('gutenberg.figCaption.align.wide'),
      },
    },

    '.alignleft': {
      figcaption: {
        textAlign: theme('gutenberg.figCaption.align.left'),
        padding: `
          ${theme('gutenberg.spacing.horizontal')}
          ${theme('gutenberg.spacing.vertical.default')}
          ${theme('gutenberg.spacing.horizontal')}
          0
        `,
      },
    },

    '.aligncenter': {
      figcaption: {
        textAlign: theme('gutenberg.figCaption.align.left'),
        padding: `
          ${theme('gutenberg.spacing.horizontal')}
          ${theme('gutenberg.spacing.vertical.default')}
          ${theme('gutenberg.spacing.horizontal')}
          0
        `,
      },
    },

    '.alignright': {
      figcaption: {
        textAlign: theme('gutenberg.figCaption.align.right'),
        padding: `
          ${theme('gutenberg.spacing.horizontal')}
          ${theme('gutenberg.spacing.vertical.default')}
          ${theme('gutenberg.spacing.horizontal')}
          0
        `,
      },
    },
  };

  addComponents([figCaption], { respectPrefix: false });
});
