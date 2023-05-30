/**
 * 선언 합침
 */

//인터페이스는 동일한 이름으로 중복선언 가능 타입별칭은 오류남
interface Person {
  name: string;
}

interface Person {
  //   name: number; //다른타입으로할시 충돌을함.
  age: number;
}

//결국 두개의 Person인터페이스가 합쳐짐
const person: Person = {
  name: "",
  age: 24,
};

/**
 * 모듈 보강할때 사용함
 */

interface Lib {
  a: number;
  b: number;
}
//2.이때 인터페이스 선언합침을 사용함
interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello", //1.프로퍼티 새로 추가시 이미 라이브러리는 선언이 끝남
};
