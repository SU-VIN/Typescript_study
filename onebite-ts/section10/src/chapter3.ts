/**
 * 조건부 타입 기반
 * Exclude<T,U>
 * -> 제외하다, 추방하다
 * -> T에서 U를 제거하는 타입
 */

//Exclude 직접구현
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<string | boolean, boolean>;

/**
 * Extract<T,U>
 * -> T에서 U를 추출하는 타입
 */

//Extract 직접구현
type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>;

/**
 * ReturnType<T>
 * -> 함수의 반환값 타입을 추출하는 타입
 */

//ReturnType 직접구현
type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>;
type ReturnB = ReturnType<typeof funcB>;
