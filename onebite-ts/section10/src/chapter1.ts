/**
 * Mapped 기반
 * Partial<T>
 * -> 부분적인 ,일부분의
 * -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

//Partial 직접구현
type Partial<T> = {
  //keyof 연산자 특정 객체 타입으로 부터 모든 키를 유니온 타입으로 추출
  // in 연산자 mapped타입에서 제공되는 연산자로 왼쪽의 키가 오른쪽으 유니온 타입에 하나씩 매핑
  //T[ ] -> 인덱스드엑세스 타입 -> 특정 객체나 배열로 부터 특정 프로퍼티의 타입을 추출하는 타입
  [key in keyof T]?: T[key];
};

//post의 프로퍼티를 모두 선택적 프로퍼티로 바궈줌
const draft: Partial<Post> = {
  title: "제목 나중에 짓자",
  content: "초안...",
};

/**
 * Required<T>
 * -> 필수의, 필수적인
 * -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

//Required 직접구현
type Required<T> = {
  [key in keyof T]-?: T[key];
};

const withThumbnailPost: Required<Post> = {
  title: "한입 타스 후기",
  tags: ["ts"],
  content: "",
  thumbnailURL: "https://...",
};

/**
 * Readonly<T>
 * -> 읽기전용, 수정불가
 * -> 특정 객체 타입에서 모든 프로퍼티를 익기 전용 프로퍼티로 만들어주는 타입
 */

//readonly 직접구현
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글 입니다",
  tags: [],
  content: "",
};
