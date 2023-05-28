/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은타입에서 좁은타입으로
 * 타입을 상황에 따라 좁히는 방법
 */

type Person = {
  name: string;
  age: number;
};

function func(value: number | string | Date | Person) {
  if (typeof value == "number") {
    //타입 가드 number만 들어갈 수 있음
    console.log(value.toFixed);
  } else if (typeof value == "string") {
    console.log(value.toUpperCase);
  } else if (value instanceof Date) {
    //a instanceof b a가 b냐?
    console.log(value.getTime);
  } else if (value && "age" in value) {
    console.log(`${value.name}${value.age}`);
  }
}
