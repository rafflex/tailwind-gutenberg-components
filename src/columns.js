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
      selector: `&.has-${column}-columns`,
    });

    column += 1;
  }

  return template;
};

module.exports = pluginWithDefaultConfig(({ addComponents, theme }) => {
  const themeValue = themeRecursive(theme);

  const colGap = themeValue(theme('gutenberg.spacing.horizontal'));
  const breakPoint = themeValue(theme('screens.md'));

  const gridTemplate = makeGridTemplate({ max: 12, start: 2 });

  const columns = {
    [`div:not(.wp-block-group)`]: {
      '.wp-block-columns, .is-grid': {
        paddingLeft: colGap,
        paddingRight: colGap,
        marginLeft: `-${colGap}`,
        marginRight: `-${colGap}`,

        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        gap: colGap,

        [`@media (min-width: ${breakPoint})`]: {
          flexDirection: 'row',

          '> .wp-block-column': {
            flexBasis: 0,
            flexGrow: 1,
          },

          '> .wp-block-column[style*="flex-basis:"]': {
            flexGrow: 0,
          },
        },

        /**
         * Prefer grid for supporting browsers.
         */
        '@supports (display: grid)': {},

        /**
         * Fallback to flex.
         */
        '@supports not (display: grid)': {},
      },
    },
  };

  gridTemplate.forEach((obj) => {
    // columns[`div:not(.wp-block-group)`]['.wp-block-columns, .is-grid']['@supports (display: grid)'][obj.selector] = {
    //   display: 'grid',
    //   'grid-column-gap': colGap,
    //   [`@media (min-width: ${breakPoint})`]: {
    //     'grid-template-columns': `repeat(${obj.count}, minmax(0, 1fr))`,
    //   },
    // };

    columns[`div:not(.wp-block-group)`]['.wp-block-columns, .is-grid'][
      '@supports not (display: grid)'
    ][obj.selector] = {
      display: 'flex',
      flexWrap: 'nowrap',
      '> .wp-block-column': {
        flex: 1,
      },
    };
  });

  addComponents([columns], { respectPrefix: false });
});
