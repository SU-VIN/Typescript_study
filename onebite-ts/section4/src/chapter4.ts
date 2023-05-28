/**
 * 사용자 정의 타입 가드
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

//true를 리턴하면 animal 타입은 Dog이다
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

//만약 서로소 유니온 사용 못할때
//사용자 정의 타입 가드 사용함
function warning(animal: Animal) {
  if (isDog(animal)) {
    animal;
  } else {
    animal;
  }
}
