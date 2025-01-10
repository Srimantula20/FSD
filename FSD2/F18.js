const createReverseIterable = (arr) => {
    return {
      [Symbol.iterator]() {
        let index = arr.length - 1;
 
        return {
          next() {
            if (index >= 0) {
              return { value: arr[index--], done: false };
            } else {
              return { done: true };
            }
          },
        };
      },
    };
  };
 
  const arr = [1, 2, 3, 4];
  const reverseIterable = createReverseIterable(arr);
 
  for (const value of reverseIterable) {
    console.log(value);
  }
 


