import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { accessToken } from "../recoil/atoms";

const useTokenParam = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const setAccessToken = useSetRecoilState(accessToken);
  const acessTOKEN = useRecoilValue(accessToken);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("accessToken");

    if (token) {
      setAccessToken(token);
      navigate("/main", { replace: true });
    }
  }, [location, setAccessToken, navigate, acessTOKEN]);

  return null;
};

export default useTokenParam;
