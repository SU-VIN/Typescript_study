const button = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}
// js 의 input은 언제나 문자열  1, 5 입력시 우리가 원하는 6이아니라 문자열이 이어진 15가 출력
button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});
