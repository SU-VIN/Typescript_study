// const person: {
//   name: string;
//   age: number;
// } = {
//위처럼 타입을 명시적으로 나타내는건 좋지않음
//사용자 지정 타입
//0부터 index가 차례대로 적용됨
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "subin",
    age: 24,
    hobbies: ["Sports", "Cooking"],
    role: Role.AUTHOR,
};
// let favoriteActivities: any[]; //데이터 타입 명시적 설정
// //타입이 2개이상인 배열의 타입은 any
// favoriteActivities = ["Sports", 1];
if (person.role === Role.AUTHOR) {
    console.log("hi author");
}
var favoriteActivities; //데이터 타입 명시적 설정
favoriteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLowerCase());
}
//튜플
var join;
join = ["임수빈", "여자", 23];
// join = ["임수빈",23,"여자"]; <-에러
