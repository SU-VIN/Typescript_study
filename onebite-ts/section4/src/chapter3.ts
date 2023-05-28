/**
 * 함수 오버로딩 js는 지원 x ts 지원
 * 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 정의하는 버전
 */

//버전들(함수선언식만 씀) -> 오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number, c: number): void;

//함수 구현부-> 구현 시그니처

function func(a: number, b?: number, c?: number) {
  if (typeof b == "number" && typeof c == "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

// func(); 에러
func(1);
// func(1, 2); 에러
func(1, 2, 3);
