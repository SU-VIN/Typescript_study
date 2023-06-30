/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;
//분산을 막고싶다면 A extends B -> A와 B에 [] 로 감싸면 됨

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>; //유니온타입을 넣어버리면 분산적 조건부 타입으로 바꿈
//number , string 타입이 한번씩 들어가짐

let d: StringNumberSwitch<boolean | number | string>;

//1단계: 각각 한번씩 불려짐
//StringNumberSwitch<boolean> |
//StringNumberSwitch<number> |
//StringNumberSwitch<string>

//2단계: 각각 불려진 값은 number string이므로 d의 타입은 number|string
//number
//string
//number

/**
 * 실용적인 예제
 */

//타입변수 T가 타입변수 U의 서브타입이라면 never 아니라면 걍 T
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;

//1단계: 역시나 하나씩 대입
//Exclude<number, string> |
//Exclude<string, string> |
//Exclude<boolean, string>

//2단계: 최종결과 -> number|boolean
//number
//never
//boolean

//유니온타입에 never는 걍 없어짐
//-> 유니온은 타입들의 합집합인데 never는 공집합 , 합집합과 공집합의 합집합은 결국 원본 집합임

//U의 타입만 추출하는 방법
type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
