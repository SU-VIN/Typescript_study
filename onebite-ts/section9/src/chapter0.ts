/**
 * 조건부 타입
 * - 삼항연산자로 타입에 조건을 걸어줌
 */

//A가 string을 확장하는 타입인가?
type A = number extends string ? string : number;

type objA = {
  a: number;
};

type objB = {
  a: number;
  b: number;
};

//objA를 확장하니? ㅇㅇ -> number
type B = objB extends objA ? number : string;

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;

let varB: StringNumberSwitch<string>;

//오버로드 시그니처
//선언부
function removeSpaces<T>(text: T): T extends string ? string : undefined;

//조건부 타입을 함수의 반환값으로 정의를 하면 조건에 따라 반환값을 원하는대로 바꿀 수 있음
//구현부
function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", ""); //함수 내부는 T가 뭐일지 모르기때문에 as로 단언 해줘야함 하지만 함수 오버로드로 해결 가능
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im subin");
result.toUpperCase();

let result2 = removeSpaces(undefined);
