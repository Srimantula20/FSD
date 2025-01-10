function mergeArrays() {
    const arrays = [...arguments];
   
    return arrays.reduce((acc, curr) => [...acc, ...curr], []);
  }
 
 
  const result = mergeArrays([1, 2], [3, 4], [5, 6]);
  console.log(result);