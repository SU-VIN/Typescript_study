/**
 * 2. Keyof 연산자
 * - 특정 객체 타입으로부터 프로퍼티 키들을 모두 스트링 리터럴 유니온 타입으로 추출하는 연산자
 * 무조건 타입에만 사용할 수 있음
 */

// interface Person {
//   name: string;
//   age: number;
// }

//ts가 추론하는 변수 person의 타입으로 정의가됨
//typeof 연산자를 타입을 정의할때 사용하면 어떤 변수의 타입을 뽑아내는 용도로도 쓰임
type Person = typeof person;

//keyof -> 해당 객체의 프로퍼티의 키를 유니온 타입으로 추출함 ex) "name"|"age"
// keyof Person == keyof typeof person
function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person = {
  name: "임수빈",
  age: 24,
};

getPropertyKey(person, "name"); // 임수빈
