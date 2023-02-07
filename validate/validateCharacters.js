// can only be valid if a closing char is immediatly after a opening char
const isOrderValid = str => {
  const arr = Array.from(str);
  const opening = ['(', '{', '['];
  const closing = [')', '}', ']'];

  for (let i = 0; i < arr.length; i++) {
    if (!closing.includes(arr[i])) {
      continue;
    }

    let lastNotEmptyIndexBeforeCurrent = i - 1;
    while (arr[lastNotEmptyIndexBeforeCurrent] === '') {
      lastNotEmptyIndexBeforeCurrent--;
    }

    // oposite characters are in the same index on closing and opening arrays
    const opositeCharacter = opening[closing.indexOf(arr[i])];
    if (opositeCharacter !== arr[lastNotEmptyIndexBeforeCurrent]) {
      return false;
    }

    // taking out the array the ones that are correct
    arr[i] = '';
    arr[lastNotEmptyIndexBeforeCurrent] = '';
  }
  return true;
};

console.log(isOrderValid('(){}[]'));
console.log(isOrderValid('(({[]}))'));
console.log(isOrderValid('{(})'));
