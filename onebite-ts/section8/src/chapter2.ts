/**
 * 3.Mapped(맵드) 타입
 * 기존의 객체 타입으로부터 새로운 객체 타입을 만드는 타입
 */

interface User {
  id: number;
  name: string;
  age: number;
}

//특정 객체타입을 원하는대로 변경
type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

//User의 프로퍼티 다 boolean으로 변경
type BooleanUser = {
  [key in keyof User]: boolean;
};

//fetchUser readonly
type Readonly = {
  readonly [key in keyof User]: User[key];
};

//한명의 유저 정보를 불러오는 기능
function fetchUser(): Readonly {
  //...기능
  return {
    id: 1,
    name: "임수빈",
    age: 24,
  };
}

//한명의 유저 정보를 수정하는 기능
function updateUser(user: User) {
  //...수정하는 기능
}

updateUser({
  id: 1,
  name: "임수빈",
  age: 24,
});
