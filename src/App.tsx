// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Landing from "./pages/Landing";
// import OnBoarding from "./pages/OnBoarding";
// import LogIn from "./pages/LogIn";
// import Main from "./pages/Main";
// import Board from "./pages/Board";
// import MyPage from "./pages/MyPage";
// import Cosmetic from "./pages/Cosmetic";
// import Cafe from "./pages/Cafe";
// import Concert from "./pages/Concert";
// import Clothes from "./pages/Clothes";
// import useAuth from "./apis/logIn";
// import { useEffect } from "react";
// import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
// import { accessToken, ediya, interPark, oliveYoung, ssf } from "./recoil/atoms";
// import { InterPark, Product } from "./stories/ItemList/ItemList";

// const VITE_API_URL_OLIVEYOUNG = "https://snapevent.site/api/crawl/olive-young";
// const VITE_API_URL_INTERPARK = "https://snapevent.site/api/crawl/interpark";
// const VITE_API_URL_SSF = "https://snapevent.site/api/crawl/ssf-shop";
// const VITE_API_URL_EDIYA = "https://snapevent.site/api/crawl/ediya-coffee";

// const App = () => {
//   const accessTOKEN = useRecoilValue(accessToken);

//   const setOliveYoungItem = useSetRecoilState<Product[]>(oliveYoung);
//   const setInterParkItem = useSetRecoilState<InterPark[]>(interPark);
//   const setSSFItem = useSetRecoilState<Product[]>(ssf);
//   const setEdiyaItem = useSetRecoilState<Product[]>(ediya);

//   const { onSilentRefresh } = useAuth();

//   useEffect(() => {
//     console.log("access Token: ", accessTOKEN);
//     onSilentRefresh();
//   }, [accessToken]);

//   useEffect(() => {
//     (async () => {
//       const responseOliveYoung = await fetch(VITE_API_URL_OLIVEYOUNG);
//       const responseInterPark = await fetch(VITE_API_URL_INTERPARK);
//       const responseSSF = await fetch(VITE_API_URL_SSF);
//       const responseEdiya = await fetch(VITE_API_URL_EDIYA);

//       if (!responseOliveYoung.ok) {
//         throw new Error("API 호출 실패" + responseOliveYoung.status);
//       }
//       if (!responseInterPark.ok) {
//         throw new Error("API 호출 실패" + responseInterPark.status);
//       }
//       if (!responseSSF.ok) {
//         throw new Error("API 호출 실패" + responseSSF.status);
//       }
//       if (!responseEdiya.ok) {
//         throw new Error("API 호출 실패" + responseEdiya.status);
//       }
//       const jsonResponseOliveYoung = await responseOliveYoung.json();
//       setOliveYoungItem(jsonResponseOliveYoung);

//       const jsonResponseInterPark = await responseInterPark.json();
//       setInterParkItem(jsonResponseInterPark);

//       const jsonResponseSSF = await responseSSF.json();
//       setSSFItem(jsonResponseSSF);

//       const jsonResponseEdiya = await responseEdiya.json();
//       setEdiyaItem(jsonResponseEdiya);
//     })();
//   }, []);

//   return (
//     <RecoilRoot>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Landing />} />
//           <Route path="/onboarding" element={<OnBoarding />} />
//           <Route path="/login" element={<LogIn />} />
//           <Route path="/main" element={<Main />} />
//           <Route path="/board" element={<Board />} />
//           <Route path="/mypage" element={<MyPage />} />
//           <Route path="/cosmetic" element={<Cosmetic />} />
//           <Route path="/cafe" element={<Cafe />} />
//           <Route path="/concert" element={<Concert />} />
//           <Route path="/clothes" element={<Clothes />} />
//           <Route path="/board" element={<Board />} />
//         </Routes>
//       </Router>
//     </RecoilRoot>
//   );
// };

// export default App;
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
import useAuth from "./apis/logIn";
import useFetchData from "./apis/useFetchData";
import { useEffect } from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import { accessToken } from "./recoil/atoms";

const App = () => {
  const accessTOKEN = useRecoilValue(accessToken);
  const { onSilentRefresh } = useAuth();

  useEffect(() => {
    console.log("access Token: ", accessTOKEN);
    onSilentRefresh();
  }, [accessTOKEN]);

  useFetchData();

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
        </Routes>
      </Router>
    </RecoilRoot>
  );
};

export default App;
