function* combineSequences(array, fibonacciLimit) {
    for (const item of array) {
      yield item;
    }
 
    let a = 0, b = 1;
    while (fibonacciLimit-- > 0) {
      yield a;
      [a, b] = [b, a + b];
    }
  }
 
  const numbers = [10, 20, 30];
  const fibLimit = 5;
  const combined = combineSequences(numbers, fibLimit);
 
  for (const value of combined) {
    console.log(value);
  }