import { useRecoilValue } from "recoil";
import isLoggedIn from "../../recoil/atoms";
import { Button } from "../Button/Button";
import "./header.css";
import { useNavigate } from "react-router-dom";
interface HeaderProps {
  onLogin?: () => void;
  onLogout?: () => void;
}

export const Header = ({ onLogin, onLogout }: HeaderProps) => {
  const recoilIsLoggedIn = useRecoilValue(isLoggedIn);
  const navigate = useNavigate();
  return (
    <header>
      <div className="storybook-header">
        <div>
          <h1
            onClick={() => {
              navigate("/main");
            }}
          >
            SnapEvent
          </h1>
        </div>
        <div>
          {recoilIsLoggedIn ? (
            <>
              <span onClick={() => navigate("/mypage")} className="welcome">
                마이페이지
              </span>
              <Button size="medium" onClick={onLogout} label="Log out" />
            </>
          ) : (
            <>
              <Button primary size="medium" onClick={onLogin} label="Log In" />
            </>
          )}
        </div>
      </div>
    </header>
  );
};
