import { useState } from "react";
import { TodoDispatchContext, useTodoDispatch } from "../App";

interface Props {
  // onClickAdd: (text: string) => void;
}

export default function Editor(props: Props) {
  const dispatch = useTodoDispatch();

  //useState는 제네릭함수 -> 함수를 호출할 때 타입이 정해지기 때문
  const [text, setText] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    dispatch.onClickAdd(text);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickButton}>+</button>
    </div>
  );
}
