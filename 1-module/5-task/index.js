function truncate(str, maxlength) {
  let newString = '';
  if (str.length < maxlength) {
    return str;
  }
  newString = str.slice(0, maxlength - 1) + '…';
  return newString;
}

