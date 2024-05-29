import axios, { AxiosResponse } from "axios";
import { accessToken } from "../recoil/atoms";
import { useSetRecoilState } from "recoil";
import { useCallback } from "react";

export interface logInData {
  username: string;
  password: string;
}

/*
const logIn : any = async (userData: logInData) => {
  axios.post('/api/members/login', userData).then ((response) => {
    const responseData = response.data;
    axios.defaults.headers.common['Authorization'] = `Bearer ${responseData.accessToken}`;
    return responseData;
  }).catch((error) => {
    console.log(error);
  })
};*/
/*
export const onLogInSuccess = (response: AxiosResponse) => {
  const token = response.data;
  const setAccessToken = useSetRecoilState(accessToken);
  setAccessToken(token.accessToken);
  console.log('액세스 토큰 변환');
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  console.log(accessToken);
  console.log(axios.defaults.headers.common.Authorization);
};

export const logIn = (userData: logInData) => {
  axios.post('/api/members/login', userData)
    .then(onLogInSuccess)
    .catch((error: AxiosError)=>{console.log(error)})
   
};

export const onSilentRefresh = () => {
  const navigate = useNavigate();
  axios.post('/api/members/reissue')
  .then(onLogInSuccess)
  .catch((error: AxiosError) => {console.log(error); navigate('/login')});
};*/

const useAuth = () => {
  const setAccessToken = useSetRecoilState(accessToken);

  const onLogInSuccess = useCallback(
    (response: AxiosResponse) => {
      const token = response.data;
      setAccessToken(token.accessToken);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token.accessToken}`;
      console.log("액세스 토큰 변환");
      console.log(token.accessToken);
      console.log(axios.defaults.headers.common.Authorization);
    },
    [setAccessToken]
  );

  const logIn = useCallback(
    (userData: logInData) => {
      axios
        .post("/api/members/login", userData)
        .then(onLogInSuccess)
        .catch((error) => console.log(error));
    },
    [onLogInSuccess]
  );

  const onSilentRefresh = useCallback(() => {
    axios
      .post("/api/members/reissue")
      .then(onLogInSuccess)
      .then(() => console.log("토큰재발급 완료"))
      .catch((error) => console.log(error));
  }, [onLogInSuccess]);

  return { logIn, onSilentRefresh };
};

export default useAuth;
