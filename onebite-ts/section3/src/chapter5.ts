/**
 * 타입 추론 ts 는 점진적 타입 추론
 */

let a = 10; //자동으로(초기값 기준) 타입 number일것이라고 추론

let b = "hello";

let c = {
  id: 1,
  name: "임수빈",
  profile: {
    nickname: "수박",
  },
  urls: ["www.naver.subin"],
};

//구조분해할당
let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

//any 타입의 진화
let d; //암묵적 any타입
d = 10; //any->number
d.toFixed();

d = "hello"; //number->string
d.toUpperCase();

//number타입이 아닌 10인 리터럴타입으로 추론
//const는 변수의 값이 안바뀌기때문
const num = 10;

//타입 넓히기를 통해 법용적으로 타입 추론을 함
