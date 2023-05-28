/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말함 ex> string number
 */

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

//tag를 추가해줌으로써 3개의 객체들이 서로소 관계가됨
function login(user: User) {
  if (user.tag == "ADMIN") {
    //in 보다 좀더 직관 적이고 다른사람도 알 수 있음
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다`);
  } else if (user.tag == "MEMBER") {
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
  } else if (user.tag == "GUEST") {
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
  }
}

/**
 * 비동기 작업의 결과를 처리하는 객체
 */

type LoadingTask = {
  state: "LOADING";
};
type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};
type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;
//  {
//   state: "LOADING" | "FAILED" | "SUCCESS";
//   error?: {
//     message: string;
//   };
//   response?: {
//     data: string;
//   };
// };

function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩중");
      break;
    }
    case "FAILED": {
      console.log(`에러 발생: ${task.error.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공: ${task.response.data}`);
      break;
    }
  }
}

const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 메세지",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터",
  },
};
