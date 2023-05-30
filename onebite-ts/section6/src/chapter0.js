/**
 * 클래스
 */

//동일한 모양의 객체를 만들게되면 중복 코드가 발생함
let studentA = {
  name: "임수빈",
  grade: "A",
  age: 24,
  study() {
    console.log("열심히 공부함");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};

class Student {
  //필드
  name;
  grade;
  age;
  //생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }
  //메서드
  study() {
    console.log("열심히 공부함");
  }
  introduce() {
    console.log("안녕하세요!");
  }
}

//클래스 확장
class StudentDeveloper extends Student {
  favoriteSkill;

  constructor(name, grage, age, favoriteSkill) {
    //매개변수는 지우면안돼
    super(name, grage, age); //부모클래스의 생성자가 실행
    this.favoriteSkill = favoriteSkill;
  }
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍함`);
  }
}

const studentDeveloper = new StudentDeveloper("임수박", "A+", 24, "TypeScript");

let studentB = new Student("홍길동", "B", 23);
studentB.study();
