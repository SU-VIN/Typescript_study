/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 */

/**
 * 1. 합집합 타입 - union
 */

let a: string | number | boolean;
a = 1;
a = "hello";

a = true;

//배열도 가능
let arr: (number | string | boolean)[] = [1, "hi", true];

//타입 별칭을 이용해서도 유니온 타입을 생성 할 수 있음
type Union1 = Dog | Person;

let union1: Union1 = {
  //dog
  name: "",
  color: "",
};

let union2: Union1 = {
  //person
  name: "",
  language: "",
};

let union3: Union1 = {
  //dog person 의 교집합
  name: "",
  color: "",
  language: "",
};

//dog person합집합의 밖에 존재해 불가함.
// let union4: Union1 = {
//   name: "",
// };

/**
 * 2.교집합 타입 - Intersection타입
 */

//number , string의 교집합은 불가능함 고로 never타입
let variable: number & string;

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: String;
  language: string;
};

type Intersecton = Dog & Person;

let intersection1: Intersecton = {
  //하나라도 없으면 불가
  name: "",
  color: "",
  language: "",
};
