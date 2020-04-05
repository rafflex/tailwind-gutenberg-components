const basePlugin = require("tailwindcss/plugin");
const defaultConfig = require("./src/default.config");

const plugin = (p) => basePlugin((opts) => p(opts), defaultConfig(opts.theme));

/**
 * Tailwind/Gutenberg
 * @link https://git.io/Jv6Oz
 */
module.exports = {
  /**
   * Block contents
   *
   * Required config keys:
   *  - contentWidths
   *  - rowGap
   *  - screens
   */
  blockContent: plugin(require("./src/block-content")),

  /**
   * Typographic settings
   *
   * Required config keys:
   *  - fontFamily
   *  - fontSizes
   *  - fontSizes.generated
   */
  typography: plugin(require("./src/typography")),

  /**
   * Base color settings
   *
   * Required config keys:
   *  - gutenberg.colors
   */
  colors: plugin(require("./src/colors")),

  /**
   * core/embed
   *
   * Required config keys:
   *  - @todo
   */
  aspectRatios: plugin(require("./src/aspect-ratios")),

  /**
   * core/group
   * core/columns
   * core/column
   */
  columns: plugin(require("./src/columns")),
  group: plugin(require("./src/group")),

  /**
   * Figcaptions
   */
  figcaption: plugin(require("./src/figcaption")),

  /**
   * core/embed
   */
  blockEmbed: plugin(require("./src/block-embed")),

  /**
   * core/image
   */
  image: plugin(require("./src/block-image")),

  /**
   * core/video
   */
  video: plugin(require("./src/block-video")),

  /**
   * core/cover
   */
  cover: plugin(require("./src/block-cover")),

  /**
   * core/table
   */
  table: plugin(require("./src/block-table")),
};
