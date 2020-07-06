const themeRecursive = (theme) => (value) =>
  typeof value === 'function' ? value(theme) : value;

module.exports = themeRecursive;
