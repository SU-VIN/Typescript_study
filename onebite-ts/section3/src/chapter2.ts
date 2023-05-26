// a = b 일때 b가 a보다 낮으면 업캐스팅
// a = b 일때 b가 a보다 높으면 다운캐스팅

/*
 *unknown 모든타입의 슈퍼타입 전체집합
 */

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  //다른변수엔 unknown 못넣음 == 즉 다운캐스팅 ㄴㄴ
  //   let num:number = a;
}

/*
 *never 타입 모든타입의 서브타입 공집합
 */
function neverExam() {
  function neverFunc(): never {
    //반환할수 있는게 아무것도 없다
    while (true) {}
  }

  //모든집합의 서브타입이기때문에 어디든 업캐스팅임
  let num: number = neverFunc();
  let str: string = neverFunc();

  //다운캐스팅
  //   let nevertype: never = 10;
}

/**
 * void
 */

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
  }

  let voidVar: void = undefined; // undefined는 void의 자식이기 때문에 업캐스팅 가능
}

/**
 * any (치트키) 계층도를 무시함. 모든타입의 슈퍼타입, 모든타입의 서브타입(never는 제외)으로 존재 가능
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar; //unknown보다 자식이지만 치트키처럼 슈퍼타입
  undefinedVar = anyVar; //다운캐스팅이지만 치트키
  //   neverVar=anyVar; never는 너무 순수한 공집합이기때문에 이건 불가
}
