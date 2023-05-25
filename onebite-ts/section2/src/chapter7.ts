//void - > 공허 -> 아무것도 없다. 를 의미함

//반환값의 타입도 지정할 수 있음
function func1(): string {
  return "hello";
}

//반환값이 없을때
function func2(): void {
  console.log("hi");
}

//never -> 존재하지 않는 ->불가능한 타입 ->그 어떤값도 저장못함

//함수가 정상적으로 끝나는게 아닐때 무엇도 반환하는게 불가능할때
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}
