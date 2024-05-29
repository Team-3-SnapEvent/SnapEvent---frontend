import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { accessToken } from "../recoil/atoms";

const useTokenParam = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const setAccessToken = useSetRecoilState(accessToken);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("accessToken");

    if (token) {
      setAccessToken(token);
      navigate("/main", { replace: true }); // URL에서 토큰 제거
    }
  }, [location, setAccessToken, navigate]);

  return null;
};

export default useTokenParam;