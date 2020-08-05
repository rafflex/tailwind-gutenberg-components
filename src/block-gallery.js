const pluginWithDefaultConfig = require('./util/plugin-with-default-config');
const themeRecursive = require('./util/theme-recursive');

/**
 * Grid
 */
const makeGridTemplate = ({ max = 12, start = 1 }) => {
  const template = [];
  let column = start;

  while (column <= max) {
    template.push({
      count: column,
      width: `${100 / column}%`,
      selector: `&.columns-${column}`,
    });

    column += 1;
  }

  return template;
};

module.exports = pluginWithDefaultConfig(({ addComponents, theme }) => {
  const themeValue = themeRecursive(theme);

  const options = theme('gutenberg');
  const gridTemplate = makeGridTemplate({ max: 8 });

  const gallery = gridTemplate.map((obj) => ({
    '.wp-block-gallery, .blocks-gallery-grid': {
      display: 'flex',
      flexGrow: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      position: 'relative',

      [obj.selector]: {
        '> .blocks-gallery-item': {
          flex: 1,
          minWidth: '100%',
          paddingBottom: `calc(${themeValue(
            options.spacing.vertical.default,
          )} / 2)`,

          'figure, figure img': {
            width: '100%',
          },
        },

        [`@media (min-width: ${themeValue(options.screens.md)})`]: {
          '> .blocks-gallery-item': {
            minWidth: obj.width,
            paddingLeft: `calc(${themeValue(options.spacing.horizontal)} / 2)`,
            paddingRight: `calc(${themeValue(options.spacing.horizontal)} / 2)`,
          },
        },

        '&.is-cropped figure, &.is-cropped figure img': {
          objectFit: 'cover',
          height: '100%',
          width: '100%',
        },

        '.is-cropped figure': {
          minHeight: '30vh',
        },
      },
    },
  }));

  addComponents([gallery], { respectPrefix: false });
});
