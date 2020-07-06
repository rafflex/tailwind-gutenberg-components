/** Modules */
const _ = require('lodash');
const chroma = require('chroma-js');
const pluginWithDefaultConfig = require('./utils/plugin-with-default-config');

/**
 * Colors
 */
module.exports = pluginWithDefaultConfig(({ addComponents, theme }) => {
  const options = theme('gutenberg.colors');

  const colors = _.map(options, (color, name) => ({
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
    options,
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
