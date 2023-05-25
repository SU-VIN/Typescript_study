//any
//특정 변수의 타입을 우리가 확실히 모를때

let anyVar: any = 10;
anyVar = "hello";

let num: number = 10;
num = anyVar;

//unKnown
let unKnownVar: unknown;
unKnownVar = " ";
unKnownVar = 1;

// num=unKnownVar; unknown은 할당만 가능하지 다른 변수에 넣을순 업슴 사칙연산도 불가능
//조금더 안전함
