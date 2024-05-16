import { useRecoilValue } from "recoil";
import isLoggedIn from "../../recoil/atoms";
import { Button } from "../Button/Button";
import "./header.css";

interface HeaderProps {
  onLogin?: () => void;
  onLogout?: () => void;
}

export const Header = ({ onLogin, onLogout }: HeaderProps) => {
  const recoilIsLoggedIn = useRecoilValue(isLoggedIn);
  return (
    <header>
      <div className="storybook-header">
        <div>
          <h1>SnapEvent</h1>
        </div>
        <div>
          {recoilIsLoggedIn ? (
            <>
              <span className="welcome">마이페이지</span>
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
