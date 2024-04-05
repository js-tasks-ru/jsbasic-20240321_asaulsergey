function getMinMax(str) {
  let newStr = str
    .split(' ')
    .filter((el) => {
      return parseFloat(el);
    });
  let array = newStr.map((el) => Number(el));
  let max = Math.max(...array);
  let min = Math.min(...array);

  let result = {
    min: min,
    max: max
  };

  return result;
}


