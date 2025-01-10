function* cumulativeSum(arr) {
    let sum = 0;
 
    for (const num of arr) {
      sum += num;
      yield sum;  
    }
 
    return sum;
  }
 
  const arr = [1, 2, 3, 4, 5];
  const generator = cumulativeSum(arr);
 
  let result = [];
  for (const value of generator) {
    result.push(value);
  }
 
  const { value: finalSum } = generator.next();
  console.log("Cumulative Sums:", result);
  console.log("Final Sum:", finalSum);    
 