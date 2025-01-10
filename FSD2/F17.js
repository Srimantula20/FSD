const globalSym1 = Symbol.for('sharedKey');
const globalSym2 = Symbol.for('sharedKey');

console.log(globalSym1 === globalSym2);

console.log(Symbol.keyFor(globalSym1));
console.log(Symbol.keyFor(globalSym2));

const localSym1 = Symbol('sharedKey');
const localSym2 = Symbol('sharedKey');

console.log(localSym1 === localSym2);