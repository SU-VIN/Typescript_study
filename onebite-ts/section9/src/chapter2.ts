/**
 * infer(inference 추론)
 * -> 조건부 타입 내에서 특정 타입만 추론 할 수 있는것
 */

type FuncA = () => string;

type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;
//infer R, R타입은 조건문이 참으로 되게 추론을함

type A = ReturnType<FuncA>;

type B = ReturnType<FuncB>;

type C = ReturnType<number>; //추론이 불가 -> 조건식이 거짓으로 판별

/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

//프로미스의 결과값 타입만 떼오는
type PromiseA = PromiseUnpack<Promise<number>>; //->결과값 number

type PromiseB = PromiseUnpack<Promise<string>>; //->결과값 string
