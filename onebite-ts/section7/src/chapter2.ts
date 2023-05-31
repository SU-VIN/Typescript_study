/**
 * map 메서드
 */

const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2);

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}
//여기서 it은 arr의 타입과 동일해야함
map(arr, (it) => it * 2);
map(["hi", "bye"], (it) => it.toUpperCase());
map(["hi", "bye"], (it) => parseInt(it));

/**
 * forEach 메서드
 */

const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it)); //map과다르게 반환하지 않고 콜백함수를 한번씩 순회

function foreach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

foreach(arr2, (it) => console.log(it.toFixed));
