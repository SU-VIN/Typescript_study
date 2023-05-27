/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/**
 * 객체 타입간의 호환성
 * ->어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yello",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog; //animal은 dog의 슈퍼타입 즉 업캐스팅
// dog=animal; 반대는 안된다 다운캐스팅

//구조적 타입 시스템

//animal=dog가 가능한데 왜 오류? -> 초과 프로퍼티 검사

let animal2: Animal = {
  name: "돌돌이",
  color: "brown",
  //   breed: "진도", -> 초과 프로퍼티 검사 발동.
};
