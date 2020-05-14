function factorialize(num) {
  let factorial = 1;
  if (num>1) {
    for (let i=2; i<=num;i++) {
    factorial *= i;
    }
  }
  return factorial;
}

console.log(factorialize(10));
