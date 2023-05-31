/**
 * 1. 첫번째 사례
 */

//타입변수 여러개 설정 가능
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

//구조분해할당
const [a, b] = swap("1", 2);

// const [a, b] = swap("1", 2); 이미 T가 string으로 할당돼있어 number는 할당할수가없음

/**
 * 2. 두번째 사례
 */

//타입변수를 배열타입으로 할수있음
//매개변수를 튜플로바꿔 첫번째 요소의 타입은알고 그 뒤의 요소들의 타입은 알필요없을때
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
let str = returnFirstValue([1, "hi", "bye"]);

/**
 * 세번째 사례
 */

//확장함. lenthgh라는 프로퍼티를 가지고있어야함
//변수에 조건을 달아서 제한할수있음
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); //3
let var2 = getLength("12345"); //5
let var3 = getLength({ length: 10 }); //10
// let var4 = getLength(10); length프로퍼티가 없기때문에 오류
