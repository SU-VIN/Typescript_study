// const person: {
//   name: string;
//   age: number;
// } = {
//위처럼 타입을 명시적으로 나타내는건 좋지않음
var person = {
    name: "subin",
    age: 24,
    hobbies: ["Sports", "Cooking"],
};
// let favoriteActivities: any[]; //데이터 타입 명시적 설정
// //타입이 2개이상인 배열의 타입은 any
// favoriteActivities = ["Sports", 1];
var favoriteActivities; //데이터 타입 명시적 설정
favoriteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLowerCase());
}
