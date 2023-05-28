/**
 * 타입 단언
 */

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도", //추가 프로퍼티 검사 피할 수 있음
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야ㅡ함
 */

let num1 = 10 as never; //10은 number이고 never은 모든 타입의 서브타입이기때문
let num2 = 10 as unknown;

// let num3 = 10 as string; 불가

/**
 * const 단언
 */

let num3 = 10 as const;

//객체에 const단언을 하면 readonly가 됨
let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

// cat.name = ""; 불가!

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string; //작성자는 없을 수 도 있음
};

let post: Post = {
  title: "게시글1",
  author: "임수빈",
};

// const len: number = post.author?.length; //만약 author이 없어 undefined가 나오면 number에는 할당 불가함
const len: number = post.author!.length; // ! 사용 null/undefined가 아니라고 믿게함
