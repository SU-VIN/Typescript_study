import { Todo } from "../types";

interface Props extends Todo {
  onClickDelete: (id: number) => void;
}

export default function Todoitem(props: Props) {
  const onClickButton = () => {
    props.onClickDelete(props.id);
  };

  return (
    <div>
      {props.id}번 : {props.content}
      <button onClick={onClickButton}>x</button>
    </div>
  );
}
