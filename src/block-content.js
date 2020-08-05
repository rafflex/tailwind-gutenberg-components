const pluginWithDefaultConfig = require('./util/plugin-with-default-config');
const themeRecursive = require('./util/theme-recursive');

/**
 * Block Content
 */
module.exports = pluginWithDefaultConfig(({ addComponents, theme }) => {
  const themeValue = themeRecursive(theme);

  const widthMap = {
    normal: '&:not(.alignwide):not(.alignfull)',
    full: '&.alignfull',
    wide: '&.alignwide',
  };

  const { blockContent, screens, spacing, wrapper } = theme('gutenberg');

  const block = {
    [`${wrapper.selector}`]: {
      '> *': {
        marginTop: themeValue(spacing.vertical.default),
        marginBottom: themeValue(spacing.vertical.default),

        '&:not(.alignwide):not(.alignfull)': {
          marginLeft: 'auto',
          marginRight: 'auto',

          '&:not([class*="max-w-"])': {
            maxWidth: themeValue(blockContent.maxWidth.xl.normal),
          },
        },

        '&.alignfull': {
          '&:not([class*="m-"]):not([class*="my-"]):not([class*="mt-"])': {
            marginTop: themeValue(spacing.vertical.full),
          },

          '&:not([class*="m-"]):not([class*="my-"]):not([class*="mb-"])': {
            marginBottom: themeValue(spacing.vertical.full),
          },
        },

        '&.alignwide': {
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: themeValue(spacing.vertical.wide),
          marginBottom: themeValue(spacing.vertical.wide),
        },
      },
    },
  };

  Object.entries(widthMap).forEach(([type, selector]) =>
    Object.entries(screens).forEach(([bp, width]) => {
      block[`${wrapper.selector}`]['> *'][selector][
        `@media (min-width: ${themeValue(width)})`
      ] = {
        maxWidth: themeValue(blockContent.maxWidth[bp][type]),
      };
    }),
  );

  addComponents(block, { respectPrefix: false });
});
