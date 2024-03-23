function factorial(n) {
  let productOfNumbers = 1;
  if (n === 1) {
    return 1;
  }

  for (let i = 1; i <= n; i++) {
    productOfNumbers *= i;
  }

  return productOfNumbers;
}

