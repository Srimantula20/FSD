const createInfiniteSequence = function* () {
    let num = 1;
    while (true) {
      yield num++;
    }
  };
 
  const sequence = createInfiniteSequence();
  const steps = 10;
  let count = 0;
 
  for (const value of sequence) {
    console.log(value);
    count++;
    if (count >= steps) break;
  }