import { Button } from "../Button/Button";
import { useState } from "react";
import "./modal.css";

interface userData {
  id: string;
  password: string;
  nickname?: string;
}

interface ModalProps {
  title: string;
  user?: userData;
  alert?: string;
  onLogIn?: boolean;
  onJoinIn?: boolean;
  closeModal?: () => void;
  logIn?: () => void;
  joinIn?: () => void;
  checkDuplication?: () => void;
  deleteFollowing?: () => void;
  deleteSubscribing?: () => void;
  fixAlarming?: () => void;
  deleteAlarming?: () => void;
  fixPersonalInfo?: () => void;
  withdrawMembership?: () => void;
}

const Modal = ({ title, onLogIn, closeModal, checkDuplication, logIn, joinIn }: ModalProps) => {
  const [logInId, setLogInId] = useState("");
  const [logInPassword, setLogInPassword] = useState("");
  const [joinInId, setJoinInId] = useState("");
  const [joinInPassword, setJoinInPassword] = useState("");
  const [checkingPassword, setCheckingPassword] = useState("");
  const userData: userData = {
    id: `${logInId}`,
    password: `${logInPassword}`,
  };
  return (
    <div className="modal-wrapper">
      <div className="modal-background">
        <div className="modal-container">
          <h1>{title}</h1>
          <h1 className="exit" onClick={closeModal}>
            X
          </h1>
          {onLogIn ? (
            <>
              <form>
                <label htmlFor="ID">ID</label>
                <input
                  name="ID"
                  type="text"
                  id="ID"
                  onChange={(e) => {
                    setLogInId(e.target.value);
                  }}
                />
                <label htmlFor="PASSWORD">PASSWORD</label>
                <input
                  id="PASSWORD"
                  name="password"
                  type="text"
                  onChange={(e) => {
                    setJoinInPassword(e.target.value);
                  }}
                />
                <Button label="로그인" onClick={logIn}></Button>
              </form>
            </>
          ) : (
            <>
              <form>
                <label htmlFor="JOINID">ID</label>
                <input id="JOINID" name="joinId" type="text" />
                <label htmlFor="JOINDPASSWORD">PASSWORD</label>
                <input id="JOINPASSWORD" name="joinPassword" type="text" />
                <label htmlFor="NICKNAME">닉네임</label>
                <input id="NICKNAME" name="joinNickname" type="text" />
                <Button label="중복 확인" onClick={checkDuplication} />
                <Button label="회원가입" onClick={joinIn} />
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Modal;
