const createResettableIterable = (arr) => {
    return {
      _index: 0,
 
      [Symbol.iterator]() {
        this._index = 0;
        return this;
      },
 
      next() {
        if (this._index < arr.length) {
          return { value: arr[this._index++], done: false };
        } else {
          return { done: true };
        }
      },
 
      reset() {
        this._index = 0;
      },
    };
  };
 
  const numbers = createResettableIterable([10, 20, 30]);
 
  for (const num of numbers) {
    console.log(num);
  }
 
  numbers.reset();
  for (const num of numbers) {
    console.log(num);
  }
 