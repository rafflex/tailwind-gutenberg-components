/** Modules */
const _ = require('lodash');
const chroma = require('chroma-js');
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette')
  .default;
const pluginWithDefaultConfig = require('./util/plugin-with-default-config');
const themeRecursive = require('./util/theme-recursive');

/**
 * Colors
 */
module.exports = pluginWithDefaultConfig(({ addComponents, theme }) => {
  const themeValue = themeRecursive(theme);
  const options = theme('gutenberg.colors', theme('colors', {}));

  const palette = flattenColorPalette(themeValue(options));

  const colors = _.map(palette, (color, name) => ({
    [`.has-${name}-color`]: {
      color,
    },

    [`.has-${name}-background-color`]: {
      backgroundColor: color,
    },

    [`.has-${name}-background-color.has-background-dim`]: {
      backgroundColor: color,
    },
  }));

  const validColors = _.filter(
    palette,
    (color) =>
      _.isNumber(color) ||
      `${color}`.trim().match(/^(#|rgb|hsl|hsv|hsi|lab|lch|hcl|lrgb)/),
  );

  const opacities = theme('gutenberg.opacity', theme('backgroundOpacity'));

  const shades = _.map(validColors, (color, name) =>
    _.map(opacities, (opacity) => ({
      [`.has-${name}-background-color.has-background-dim-${opacity}`]: {
        backgroundColor: `rgba(${chroma(color)
          .alpha(opacity > 1 ? opacity * 0.01 : opacity)
          .rgba()})`,
        zIndex: 10,
      },
    })),
  );

  addComponents([colors, ...shades], { respectPrefix: false });
});
