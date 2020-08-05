const _ = require('lodash');
const pluginWithDefaultConfig = require('./util/plugin-with-default-config');
const themeRecursive = require('./util/theme-recursive');

module.exports = pluginWithDefaultConfig(({ addComponents, theme }) => {
  const themeValue = themeRecursive(theme);

  /**
   * Tailwind Config Options
   */
  const familyConfig = theme('gutenberg.typography.fontFamily');
  const colorConfig = theme('gutenberg.typography.fontColor');
  const sizeConfig = _.omit(
    theme('gutenberg.typography.fontSize'),
    'generated',
  );
  const userScaleConfig = theme('gutenberg.typography.fontSize.userScale');

  /**
   * Font Families
   */
  const fonts = _.map(familyConfig, (value, key) => {
    return {
      [`${key}:not([class^="font-"])`]: {
        fontFamily: `${themeValue(value).map((font) => `${font}`)}`,
      },
    };
  });

  /**
   * Font Sizes
   */
  const sizes = _.map(sizeConfig, (value, key) => ({
    [`${key}:not([class^="font-"])`]: {
      fontSize: themeValue(value),
    },
  }));

  /**
   * WordPress Generated Font Sizes
   */
  const generatedFontSizes = _.map(userScaleConfig, (value, key) => ({
    [`.has-${key}-font-size`]: {
      fontSize: themeValue(value),
    },
  }));

  /**
   * Font Colors
   */
  const colors = _.map(colorConfig, (value, key) => ({
    [`${key}:not([class^="has-"])`]: {
      color: themeValue(value),
    },
  }));

  /**
   * List styles
   */
  const listStyles = {
    [`ol:not([class^="wp-block-"]) li,
      ol:not([class^="wp-block-"]) li *,
      ul:not([class^="wp-block-"]) li,
      ul:not([class^="wp-block-"]) li *`]: {
      paddingLeft: themeValue(theme('gutenberg.lists.inset')),
    },

    [`ol:not([class^="wp-block-"]),
      ol:not([class^="wp-block-"]) *`]: {
      listStylePosition: 'inside',
      listStyleType: themeValue(theme('gutenberg.lists.orderedStyle')),
    },

    [`ul:not([class^="wp-block-"]),
      ul:not([class^="wp-block-"]) *`]: {
      listStylePosition: 'inside',
      listStyleType: themeValue(theme('gutenberg.lists.unorderedStyle')),
    },
  };

  addComponents([fonts, sizes, generatedFontSizes, colors, listStyles], {
    respectPrefix: false,
  });
});
