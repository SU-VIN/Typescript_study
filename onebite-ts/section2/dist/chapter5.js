//enum 타입 only ts
//여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
//ts의 enum은 컴파일시 사리지지 않고 js에서 객체로 변화
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
const user1 = {
    name: "임수빈",
    role: Role.ADMIN, // 관리자
};
const user2 = {
    name: "홍길동",
    role: Role.USER, //일반유저
};
const user3 = {
    name: "토마토",
    role: Role.GUEST, //게스트
};
export {};
