/**
 * 접근 제어자
 * public private protected
 */

//public 다 공개
//private 클래스 내부에서만 가능 (메서드) 파생 클래스에서도 불가
//protected 외부에서는 불가하지만 파생클래스에서는 가능

//생성자에서 접근제어자 설정가능 하지만 필드와 중복되므로 필드는 지워줘야함
class Employee {
  //필드
  private name: string;
  age: number;
  position: string;

  //생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  //메서드
  work() {
    console.log("일함");
  }
}

const employee = new Employee("임수빈", 21, "developer");
// employee.name = "홍길동";
