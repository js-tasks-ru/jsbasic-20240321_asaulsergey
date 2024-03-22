function factorial(n) {
  let a = 1;
  for (i = 1 ; i <= n ; i++) {
    if (n === 1) {
      return 1;
    }
    a *= i;
  }
  return a;
}

