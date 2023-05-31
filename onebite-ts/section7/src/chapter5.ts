/**
 * 프로미스
 * 프로미스느 제네릭 클래스 기반으로 타입이 선언되있기 때문에
 * 비동기 작업의 결과값을 타입변수에 할당해줄수있지만 실패했을땐 불가능함
 */

//비동기 작업의 결과값을 타입변수에 할당해줌
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    //resolve(20);
    reject("~~때문에 실패");
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10);
});

promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

//함수의 반환값을 직접명시하는게 협업에서 좋음
function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});
