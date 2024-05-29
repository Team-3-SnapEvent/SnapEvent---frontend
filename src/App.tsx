import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import OnBoarding from "./pages/OnBoarding";
import LogIn from "./pages/LogIn";
import Main from "./pages/Main";
import Board from "./pages/Board";
import MyPage from "./pages/MyPage";
import Cosmetic from "./pages/Cosmetic";
import Cafe from "./pages/Cafe";
import Concert from "./pages/Concert";
import Clothes from "./pages/Clothes";
//import useTokenParam from "./utils/useTokenParam";
//import useAuth from "./apis/logIn";
import { useEffect } from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import { accessToken } from "./recoil/atoms";

const App = () => {
  const accessTOKEN = useRecoilValue(accessToken);
  //const { onSilentRefresh } = useAuth();
  useEffect(() => {
    //useTokenParam();
    console.log("access Token: ", accessTOKEN);
    //onSilentRefresh();
  }, [accessToken]);

  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/onboarding" element={<OnBoarding />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/main" element={<Main />} />
          <Route path="/board" element={<Board />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/cosmetic" element={<Cosmetic />} />
          <Route path="/cafe" element={<Cafe />} />
          <Route path="/concert" element={<Concert />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
};

export default App;
