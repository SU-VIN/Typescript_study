/**
 * 제네릭(일반적인 포괄적인)
 */

//제네릭 함수
//<T> => 타입변수
function func<T>(value: T): T {
  return value;
}

//기본 함수의 리턴타입 any나 unknown을하면 반환값들도 any나 unknown이됨 그래서 제네릭함수를
//사용하면 해결가능, 함수를 호출할때 타입이 정해짐
let num = func(10);
let bool = func(true);
let str = func("string");

let arr0 = func([1, 2, 3]); //배열타입
let arr = func<[number, number, number]>([1, 2, 3]); //튜플타입으로 반환하라고 명시할수있음
