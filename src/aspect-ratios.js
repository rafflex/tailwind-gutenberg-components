const pluginWithDefaultConfig = require('./util/plugin-with-default-config');

const percent = require('./util/percent');

module.exports = pluginWithDefaultConfig(({ addComponents, theme }) => {
  const ratios = theme('gutenberg.aspectRatios', [
    [21, 9],
    [18, 9],
    [16, 9],
    [4, 3],
    [1, 1],
    [9, 6],
    [1, 2],
  ]);

  const wrapper = {
    '.wp-block-embed__wrapper': {
      position: 'relative',

      iframe: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
      },
    },
  };

  const aspectRatios = ratios.map(([w, h]) => ({
    [`.wp-embed-aspect-${w}-${h}`]: {
      '.wp-block-embed__wrapper::before': {
        content: `''`,
        display: 'block',
        paddingTop: `${percent(h, w)}%`,
      },
    },
  }));

  addComponents([wrapper, aspectRatios], { respectPrefix: false });
});
