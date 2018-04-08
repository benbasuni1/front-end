import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne);
  const two = Big(numberTwo);
  if (operation === '+') return one.plus(two).toString();
  if (operation === '-') return one.minus(two).toString();

  throw Error(`Unknown operation '${operation}'`);
}
