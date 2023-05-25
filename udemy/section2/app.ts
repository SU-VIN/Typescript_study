//유니언 타임 => 매개변수를 보다 유연하게 사용할 수 있음
function combine(input1: number | string, input2: number | string) {
  let result;

  if (typeof input1 == "number" && typeof input2 == "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges = combine(30, 26);
console.log(combineAges);

const combineNames = combine("Max", "jenny");
console.log(combineNames);
