// UserInfoInput.tsx
import React, { useState } from "react";
import { useUserInfoStore } from "../store/userInfoStore";
import { useNavigate } from "react-router-dom";

const UserInfoInput = () => {
  const navigate = useNavigate();
  const { setId, setName, setPassword } = useUserInfoStore();
  const [id, setIdInput] = useState("");
  const [name, setNameInput] = useState("");
  const [password, setPasswordInput] = useState("");

  const handleSubmit = () => {
    setId(id);
    setName(name);
    setPassword(password);
    alert("회원 정보가 저장되었습니다.");
    console.log(id, name, password);
  };

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setIdInput(e.target.value)}
        placeholder="ID"
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setNameInput(e.target.value)}
        placeholder="Name"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPasswordInput(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSubmit}>저장</button>
      <button
        onClick={() => {
          navigate("/next");
        }}
      >
        다른 페이지
      </button>
    </div>
  );
};

export default UserInfoInput;
