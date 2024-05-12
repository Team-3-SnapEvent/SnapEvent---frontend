import { Button } from "../Button/Button";
import "./header.css";

interface User {
  name: string;
}

interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
}

export const Header = ({ user, onLogin, onLogout }: HeaderProps) => (
  <header>
    <div className="storybook-header">
      <div>
        <h1>SnapEvent</h1>
      </div>
      <div>
        {user ? (
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
