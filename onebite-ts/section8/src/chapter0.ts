/**
 * 타입 조작하기-> 기본타입, 별칭, 인터페이스로 만든 타입들을
 * 타스의 특별한 문법을 사용해서 상황에 따라 각각의 타입으로 변화시키는것.
 */

/**
 * 1. 인덱스드 엑세스 타입
 * - 객체, 배열, 튜플 타입에서 특정 프로퍼티 혹은 요소의 타입을 추출하는 타입
 * 객체에 사용할때 인덱스에 들어가는 문자열은 값이아니라 타입
 */

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

//author 프로퍼티의 값들만 추출
function printAuthorInfo(author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

const post: PostList[0] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "임수빈",
    age: 24,
  },
};

type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
