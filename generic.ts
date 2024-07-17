function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const numberList = [1, 2, 3];
const typeSelect = getFirstElement(numberList);

console.log(typeSelect);