const sym1 = Symbol('uniqueProperty');
const sym2 = Symbol('uniqueProperty');

const obj = {
  [sym1]: 'Value for sym1',
  [sym2]: 'Value for sym2',
};

console.log(obj[sym1]);
console.log(obj[sym2]);

console.log(sym1 === sym2);