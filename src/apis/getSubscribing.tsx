import { useState, useEffect } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { accessToken } from "../recoil/atoms";

interface subData {
  id: number;
  subedSiteName: string;
}

const useSubscribing = () => {
  const stringAccessToken = useRecoilValue(accessToken);
  const [data, setData] = useState<subData[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (stringAccessToken) {
      axios
        .get("/api/subs/showlist", {
          headers: { Authorization: `Bearer ${stringAccessToken}` },
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
