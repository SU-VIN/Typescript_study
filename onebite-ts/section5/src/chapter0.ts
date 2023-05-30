/**
 * 인터페이스
 * 타입에 이름을 지어주는 또 다른 문법
 * 객체의 구조를 정의하는데 특화된 문법/ 상속 합침 등의 특수한 기능을 제공
 */

//유니온이나 인터섹션은 불가함
interface Person {
  name: string;
  age: number;
  //   sayHi: () => void;
  sayHi(): void; //호출 시그니처도 가능
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: "임수빈",
  age: 24,
  //메서드 타입
  sayHi: function () {
    console.log("hi");
  },
};

//메서드 오버로딩 사용할라면 호출시그니처 써야함
person.sayHi();
person.sayHi(1, 2);
