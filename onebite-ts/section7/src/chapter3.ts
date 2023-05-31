/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

//반드시 타입변수에 할당할 타입을 <> 안에 써야함
let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

/**
 * 인덱스 시그니쳐 -> 프로퍼티의 규칙만 만족하면 어떤 객체든 허용하는 유연한 문법
 */

interface NumberMap {
  [key: string]: number;
}

let numberMap: NumberMap = {
  key: 123,
  key2: 1111,
  //   key3: "!23", 는 불가
};

//조금 더 간단하게 제네릭 사용해서
interface Map<V> {
  [key: string]: V;
}

//하나의 객체로 다양한객체를 표현할 수 있음
let stringMap: Map<string> = {
  key: "string",
};

/**
 * 제네릭 타입 별칭
 */
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "string",
};

/**
 * 제네릭 인터페이스의 활용 예시
 * ->유저 관리프로그램
 * -> 유저구분
 */

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

// goToSchool(developerUser); Student가 아니기 때문에 에러발생
const developerUser: User<Developer> = {
  name: "임수빈",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "한성대학교",
  },
};
