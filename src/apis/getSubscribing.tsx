import { useState, useEffect } from "react";
import axios from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil";
import isLoggedIn, { accessToken } from "../recoil/atoms";
import { useLocation, useNavigate } from "react-router-dom";

interface subData {
  id: number;
  subedSiteName: string;
}

const useSubscribing = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const setLogIn = useSetRecoilState(isLoggedIn);
  const setAccessToken = useSetRecoilState(accessToken);
  const stringAccessToken = useRecoilValue(accessToken);
  const [data, setData] = useState<subData[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("accessToken");
    if (token) {
      setLogIn(true);
      setAccessToken(token);
      navigate("/main", { replace: true });
      axios
        .get("/api/subs/showlist", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setData(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          setError(err);
          console.log(err);
        });
    }
  }, [stringAccessToken]);

  return { data, error };
};

export default useSubscribing;

/*
import axios from "axios";
import { accessToken } from "../recoil/atoms";
import { useRecoilValue } from "recoil";

export const getSubscribing = () => {
  const stringAccessToken : string = useRecoilValue(accessToken)
  axios.get('/api/subs/showlist', {headers:{Authorization:`Bearer ${stringAccessToken}`}})
  .then((res)=>{console.log(res.data); console.log(axios.defaults.headers.common.Authorization)})
  .catch((err) => {console.log(err);console.log(axios.defaults.headers.common.Authorization)})
};

export default getSubscribing;*/
