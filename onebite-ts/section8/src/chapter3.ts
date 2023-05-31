/**
 * 4. 템플릿 리터럴 타입
 * 스트링 리터럴 타입을 기반으로 정해진 패턴의 문자열만 포함하는 타입
 */

type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

//Color 와 Animal의 모든 조합이 만들어짐
type ColoredAnimal = `${Color}-${Animal}`;
