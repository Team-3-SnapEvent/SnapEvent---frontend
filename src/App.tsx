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
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { accessToken, ediya, interPark, oliveYoung, ssf } from "./recoil/atoms";
import { InterPark, Product } from "./stories/ItemList/ItemList";


const VITE_API_URL_OLIVEYOUNG = "https://snapevent.site/api/crawl/olive-young";
const VITE_API_URL_INTERPARK = "https://snapevent.site/api/crawl/interpark";
const VITE_API_URL_SSF = "https://snapevent.site/api/crawl/ssf-shop";
const VITE_API_URL_EDIYA = "https://snapevent.site/api/crawl/ediya-coffee";

const App = () => {
  const accessTOKEN = useRecoilValue(accessToken);
  
  const setOliveYoungItem = useSetRecoilState<Product[]>(oliveYoung);
  const setInterParkItem = useSetRecoilState<InterPark[]>(interPark);
  const setSSFItem = useSetRecoilState<Product[]>(ssf);
  const setEdiyaItem = useSetRecoilState<Product[]>(ediya);

  //const { onSilentRefresh } = useAuth();

  useEffect(() => {
    //useTokenParam();
    console.log("access Token: ", accessTOKEN);
    //onSilentRefresh();
  }, [accessToken]);

  useEffect(()=>{
    (async () => {
      const responseOliveYoung = await fetch(VITE_API_URL_OLIVEYOUNG);
      const responseInterPark = await fetch(VITE_API_URL_INTERPARK);
      const responseSSF = await fetch(VITE_API_URL_SSF);
      const responseEdiya = await fetch(VITE_API_URL_EDIYA);

      if (!responseOliveYoung.ok) {
        throw new Error("API 호출 실패" + responseOliveYoung.statusText);
      }
      if (!responseInterPark.ok) {
        throw new Error("API 호출 실패" + responseInterPark.statusText);
      }
      if (!responseSSF.ok) {
        throw new Error("API 호출 실패" + responseSSF.statusText);
      }
      if (!responseEdiya.ok) {
        throw new Error("API 호출 실패" + responseEdiya.statusText);
      }
      const jsonResponseOliveYoung = await responseOliveYoung.json();
      setOliveYoungItem(jsonResponseOliveYoung);

      const jsonResponseInterPark = await responseInterPark.json();
      setInterParkItem(jsonResponseInterPark);

      const jsonResponseSSF = await responseSSF.json();
      setSSFItem(jsonResponseSSF);

      const jsonResponseEdiya = await responseEdiya.json();
      setEdiyaItem(jsonResponseEdiya);
    })();
  },[])

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
