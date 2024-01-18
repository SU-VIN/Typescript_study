import { useUserInfoStore } from "../store/userInfoStore";

const Next = () => {
  const { id, name, password } = useUserInfoStore();

  return (
    <div>
      <h1>프로필</h1>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Password: {password}</p>
    </div>
  );
};
export default Next;
