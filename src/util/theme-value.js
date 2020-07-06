const themeValue = (value, theme) =>
  typeof value === 'function' ? value(theme) : value;

module.exports = themeValue;
