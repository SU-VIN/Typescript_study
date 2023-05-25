//object
//object 로 하면 객체인것밖에 몰라 점표기법 안통함 왜냐면 ts는 구조기준, 구조적 타입 시스템.
//객체 리터럴로 프로퍼티의 타입까지 지정해주자
let user = {
    id: 1,
    name: "임수빈",
};
user = {
    name: "홍길동",
};
let config = {
    apiKey: "my api key",
};
export {};
// config.apiKey = "hacked"; 불가
