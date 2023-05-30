/**
 * 타입스크립트의 클래스
 */

import { extname } from "path";
import { off } from "process";

const employee = {
  name: "임수빈",
  age: 24,
  position: "developer",
  work() {
    console.log("일함");
  },
};

//ts에선 클래스가 클래스이자 타입으로 취급
class Employee {
  //필드
  name: string;
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

//파생 클래스
class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position); //꼭 있어야함
    this.officeNumber = officeNumber;
  }
}

//Employee 타입이라고 할 수 있음
const employeeB = new Employee("임수빈", 21, "developer");

//타입으로도 활용할수이씀 - >구조적 타입 시스템 같은 구조면 해당 타입이라고 생각
const employeeC: Employee = {
  name: "",
  age: 1,
  position: "",
  work() {},
};
