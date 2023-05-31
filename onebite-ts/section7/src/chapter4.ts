/**
 * 제네릭 클래스
 */

class List<T> {
  //필드
  //생성자
  constructor(private list: T[]) {}
  //메서드
  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberlist = new List([1, 2, 3]);

numberlist.pop();
numberlist.push(4);
numberlist.print();

//클래스를 제네릭으로 만들어 다양한 타입들을 넣을 수 잇음
const stringlist = new List(["bye", "hi"]);
