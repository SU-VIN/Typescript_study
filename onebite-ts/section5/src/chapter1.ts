/**
 * 인터페이스 확장
 */

interface Animal {
  //
  name: string;
  age: number;
}

interface Dog extends Animal {
  //확장하다(상속)
  isBark: boolean;
  //   name: "hello", //재정의 가능 하지만 원본타입의 서브타입만 가능
}

const dog: Dog = {
  name: "",
  age: 1,
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

//중복 프로퍼티가 너무 많음, name,age

/**
 * 다중확장
 */

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  age: 1,
  isBark: true,
  isScratch: true,
};
