/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가 판단
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

//1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10; //number
let b: B = () => 10; //number 리터럴

a = b; //업캐스팅이라 가능
// b = a; 다운캐스팅이라 불가능

//2. 매개변수가 호환되는가
//a. 매개변수의 개수가 같을때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; 매개변수일땐 업캐스팅이 불가능
d = c; //다운캐스팅이 가능

//b. 매개변수의 개수가 다를때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; 매개변수가 작으면 큰걸 할당하는건 당연히 불가
