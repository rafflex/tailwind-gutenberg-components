/**
 * Default gutenberg components config
 */
module.exports = {
  /**
   * Wrapping element
   */
  wrapper: {
    selector: '.entry-content',
  },

  /**
   * Support certain feature subsets
   */
  supports: {
    wideAlignments: true,
    userTypeScale: true,
    fixedLayoutTable: true,
  },

  /**
   * Support block styles
   */
  styles: {
    stripes: true,
  },

  /**
   * Screensizes for @media queries
   */
  screens: {
    sm: (theme) => theme('screens.sm'),
    md: (theme) => theme('screens.md'),
    lg: (theme) => theme('screens.lg'),
    xl: (theme) => theme('screens.xl'),
  },

  /**
   * Block contents
   */
  blockContent: {
    maxWidth: {
      xs: {
        normal: (theme) => theme('maxWidth.xl'),
        wide: (theme) => theme('maxWidth.full'),
        full: (theme) => theme('maxWidth.full'),
      },
      sm: {
        normal: (theme) => theme('maxWidth.2xl'),
        wide: (theme) => theme('maxWidth.full'),
        full: (theme) => theme('maxWidth.full'),
      },
      md: {
        normal: (theme) => theme('maxWidth.3xl'),
        wide: (theme) => theme('maxWidth.4xl'),
        full: (theme) => theme('maxWidth.full'),
      },
      lg: {
        normal: (theme) => theme('maxWidth.4xl'),
        wide: (theme) => theme('maxWidth.5xl'),
        full: (theme) => theme('maxWidth.full'),
      },
      xl: {
        normal: (theme) => theme('maxWidth.5xl'),
        wide: (theme) => theme('maxWidth.6xl'),
        full: (theme) => theme('maxWidth.full'),
      },
    },
  },

  /**
   * Spacing units
   */
  spacing: {
    horizontal: (theme) => theme('spacing.4'),
    vertical: {
      default: (theme) => theme('spacing.8'),
      wide: (theme) => theme('spacing.12'),
      full: (theme) => theme('spacing.16'),
    },
  },

  /**
   * Aspect ratios
   */
  aspectRatios: [
    [21, 9],
    [18, 9],
    [16, 9],
    [4, 3],
    [1, 1],
    [9, 6],
    [1, 2],
  ],

  /**
   * Wordpress generated colors
   * @link https://git.io/Jv6Oc
   */
  colors: {
    indigo: (theme) => theme('colors.indigo.900'),
  },

  /**
   * Opacity values
   */
  opacity: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],

  /**
   * Typography
   */
  typography: {
    fontFamily: {
      h1: (theme) => theme('fontFamily.sans'),
      h2: (theme) => theme('fontFamily.sans'),
      h3: (theme) => theme('fontFamily.sans'),
      h4: (theme) => theme('fontFamily.sans'),
      h5: (theme) => theme('fontFamily.sans'),
      h6: (theme) => theme('fontFamily.sans'),
      p: (theme) => theme('fontFamily.serif'),
      ul: (theme) => theme('fontFamily.serif'),
      ol: (theme) => theme('fontFamily.serif'),
      figcaption: (theme) => theme('fontFamily.sans'),
      table: (theme) => theme('fontFamily.sans'),
      code: (theme) => theme('fontFamily.mono'),
      pre: (theme) => theme('fontFamily.mono'),
    },

    fontSize: {
      h1: (theme) => theme('fontSize.4xl'),
      h2: (theme) => theme('fontSize.3xl'),
      h3: (theme) => theme('fontSize.2xl'),
      h4: (theme) => theme('fontSize.xl'),
      h5: (theme) => theme('fontSize.lg'),
      h6: (theme) => theme('fontSize.lg'),
      p: (theme) => theme('fontSize.base'),
      ul: (theme) => theme('fontSize.base'),
      ol: (theme) => theme('fontSize.base'),
      figcaption: (theme) => theme('fontSize.sm'),
      table: (theme) => theme('fontSize.base'),
      code: (theme) => theme('fontSize.base'),
      pre: (theme) => theme('fontSize.base'),

      /**
       * WordPress generated type scale
       * @link https://git.io/Jv6Oc
       */
      userScale: {
        small: '12px',
        normal: '16px',
        large: '36px',
        huge: '50px',
      },
    },

    fontColor: {
      h1: (theme) => theme('colors.gray.900'),
      h2: (theme) => theme('colors.gray.900'),
      h3: (theme) => theme('colors.gray.900'),
      h4: (theme) => theme('colors.gray.800'),
      h5: (theme) => theme('colors.gray.800'),
      h6: (theme) => theme('colors.gray.800'),
      p: (theme) => theme('colors.gray.700'),
      ul: (theme) => theme('colors.gray.700'),
      ol: (theme) => theme('colors.gray.700'),
      figcaption: (theme) => theme('colors.gray.700'),
      table: (theme) => theme('colors.gray.700'),
      code: (theme) => theme('colors.gray.700'),
      pre: (theme) => theme('colors.gray.700'),
    },
  },

  /**
   * Keys for `gutenberg.figCaption.textAlign`
   * map to the alignment of the containing block
   */
  figCaption: {
    textAlign: {
      left: 'left',
      right: 'right',
      center: 'center',
      wide: 'center',
    },
  },

  /**
   * Lists: unordered & ordered
   */
  lists: {
    inset: (theme) => theme('spacing.2'),
    orderedStyle: 'lower-roman',
    unorderedStyle: 'square',
  },

  /**
   * Block specific configuration values
   */
  blocks: {
    /**
     * core/cover
     */
    cover: {
      contentColor: (theme) => theme('colors.white'),
      verticalPadding: (theme) => theme('spacing.64'),
      itemsSpacing: (theme) => theme('spacing.4'),
    },

    /**
     * core/table
     */
    table: {
      head: {
        fontWeight: (theme) => theme('fontWeight.semibold'),
      },
      cell: {
        borderColor: (theme) => theme('colors.gray.200'),
        borderWidth: (theme) => theme('borderWidth.default'),
        padding: (theme) => theme('spacing.2'),
      },
      stripes: {
        color: (theme) => theme('colors.gray.100'),
      },
    },
  },
};
