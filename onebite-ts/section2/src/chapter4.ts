//타입 별칭
//user가 늘어날때 타입선언문에 중복이 발생함

//타입별칭을 생성
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};
let user: User = {
  id: 1,
  name: "임수빈",
  nickname: "수박",
  birth: "2000.02.25",
  bio: "안녕하쇼",
  location: "서울특별시",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "홍",
  birth: "2000.02.25",
  bio: "안녕하쇼",
  location: "서울특별시",
};

//인덱스 시크니처
type Countrycodes = {
  [key: string]: string; //k: v가 공통된 속성을 가지고있을때 100개의 프로퍼티가있으면 너무 비효율적 이걸 인덱스 시그니처로 나타냄.
};
let countryCode: Countrycodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};
