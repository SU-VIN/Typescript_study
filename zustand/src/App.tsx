import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserInfoInput from "./pages/UserInfoInput";
import Next from "./pages/Next";

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Routes>
        <Route path="/" element={<UserInfoInput />}></Route>
        <Route path="/next" element={<Next />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
