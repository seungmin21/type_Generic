
/**
 * arr getFirstElement 함수의 매개변수
 * T는 타입의 매개변수
 * T | undefined는 배열 속의 타입이
 * 나오거나 배열 속에 인덱스가 없을 경우
 * undefined로 나온다.
 */
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const numberList = [1, 2, 3];
const typeSelect = getFirstElement(numberList);

console.log(typeSelect);