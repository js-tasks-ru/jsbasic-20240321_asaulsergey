function camelize(str) {
  if (str === '') {
    return str;
  }
  return str
    .split('-')
    .map((el, i) => i === 0 ? el : el[0].toUpperCase() + el.slice(1, el.length))
    .join('');
}
