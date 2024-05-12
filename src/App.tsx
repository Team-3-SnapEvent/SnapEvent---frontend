import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./App.css";
// import { GlobalStyle } from "./GlobalStyle";
import Landing from "./pages/Landing";
import OnBoarding from "./pages/OnBoarding";
import LogIn from "./pages/LogIn";
import Main from "./pages/Main";
import Board from "./pages/Board";
import MyPage from "./pages/MyPage";

const App = () => {
  return (
    // <GlobalStyle>
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/onboarding" element={<OnBoarding />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/main" element={<Main />} />
          <Route path="/board" element={<Board />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Router>
    </RecoilRoot>
    // </GlobalStyle>
  );
};
export default App;
