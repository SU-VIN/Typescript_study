//배열 / 튜플타입
//배열
let numArr = [1, 2, 3];
let strArr = ["hello", "hi"];
//<>를 사용해 타입을 넣는건 제네릭문법 이라고 함
let boolArr = [true, false];
//배열에 들어가는 요소들의 타입이 다양할때
let multiArr = [1, "hello"]; //유니온타입
//다차원 배열의 타입을 정의
let doubleArr = [
    [1, 2, 3],
    [4, 5, 6],
];
//튜플 ts only 길이와 타입이 고정
let tup1 = [1, 2];
let tup2 = [1, "2", true];
export {};
