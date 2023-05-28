/**
 * 함수타입 표현식
 */

//타입별칭을 사용
type Operate = (a: number, b: number) => number; //매개변수 타입=>반환값 타입

const add = (a: number, b: number): number => a + b;

const add1: Operate = (a, b) => a + b;
const sub: Operate = (a, b) => a - b; //중복 타입코드를 줄일 수 있음

/**
 * 호출 시그니처
 */

type Opertate2 = {
  (a: number, b: number): number;
};

const add2: Opertate2 = (a, b) => a + b;
const sub2: Opertate2 = (a, b) => a - b;
