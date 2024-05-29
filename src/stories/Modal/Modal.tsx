import styled from "styled-components";

import { useState } from "react";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";
import joinIn, { joinData } from "../../apis/joinIn";
import useAuth, { logInData } from "../../apis/logIn";
import isLoggedIn from "../../recoil/atoms";
import { useSetRecoilState } from "recoil";

interface ModalProps {
  title: string;
  onLogIn?: boolean;
  closeModal: () => void;
  checkDuplication?: () => void;
}

const Modal = ({ title, onLogIn, closeModal, checkDuplication }: ModalProps) => {
  const navigate = useNavigate();
  const { logIn } = useAuth();
  const setLoggedIn = useSetRecoilState(isLoggedIn);
  const [logInId, setLogInId] = useState("");
  const [logInPassword, setLogInPassword] = useState("");
  const [joinInId, setJoinInId] = useState("");
  const [joinInPassword, setJoinInPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const logInData: logInData = {
    username: `${logInId}`,
    password: `${logInPassword}`,
  };

  const joinInData: joinData = {
    username: `${joinInId}`,
    password: `${joinInPassword}`,
    checkPassword: `${checkPassword}`,
    nickname: `${nickname}`,
  };

  return (
    <ModalWrapper>
      <ModalBackground>
        <ModalContainer>
          <TitleWrapper>
            <Title>{title}</Title>
            <Title onClick={closeModal}> ❌ </Title>
          </TitleWrapper>
          {onLogIn ? (
            <>
              <Form>
                <InputWrapper>
                  <Label htmlFor="ID">ID</Label>
                  <Input
                    name="ID"
                    type="text"
                    id="ID"
                    onChange={(e) => {
                      setLogInId(e.target.value);
                    }}
                  />
                </InputWrapper>
                <InputWrapper>
                  <Label htmlFor="PASSWORD">PASSWORD</Label>
                  <Input
                    id="PASSWORD"
                    name="password"
                    type="text"
                    onChange={(e) => {
                      setLogInPassword(e.target.value);
                    }}
                  />
                </InputWrapper>
                <Button
                  primary={true}
                  size="medium"
                  label="로그인"
                  onClick={() => {
                    logIn(logInData);
                    setLogInId("");
                    setLogInPassword("");
                    setLoggedIn(true);
                    navigate("/main");
                  }}
                />
              </Form>
            </>
          ) : (
            <>
              <Form>
                <InputWrapper>
                  <Label htmlFor="JOINID">ID</Label>
                  <Input
                    id="JOINID"
                    name="joinId"
                    type="text"
                    onChange={(e) => {
                      setJoinInId(e.target.value);
                    }}
                  />
                </InputWrapper>
                <InputWrapper>
                  <Label htmlFor="JOINPASSWORD">PASSWORD</Label>
                  <Input
                    id="JOINPASSWORD"
                    name="joinPassword"
                    type="text"
                    onChange={(e) => {
                      setJoinInPassword(e.target.value);
                    }}
                  />
                </InputWrapper>
                <InputWrapper>
                  <Label htmlFor="CHECKPASSWORD"> CHECK PASSWORD</Label>
                  <Input
                    id="CHECKPASSWORD"
                    name="checkPassword"
                    type="text"
                    onChange={(e) => {
                      setCheckPassword(e.target.value);
                    }}
                  />
                  {checkPassword !== joinInPassword && <div>입력한 비밀번호가 다릅니다.</div>}
                </InputWrapper>
                <InputWrapper>
                  <Label htmlFor="NICKNAME">닉네임</Label>
                  <Input
                    id="NICKNAME"
                    name="joinNickname"
                    type="text"
                    onChange={(e) => {
                      setNickname(e.target.value);
                    }}
                  />
                  <Button primary={false} size="small" label="중복 확인" onClick={checkDuplication} />
                </InputWrapper>
                <Button
                  primary={true}
                  label="회원가입"
                  size="medium"
                  onClick={() => {
                    console.log(joinInData);
                    joinIn(joinInData);
                    setJoinInId("");
                    setJoinInPassword("");
                    setCheckPassword("");
                    setNickname("");
                    logIn({ username: joinInData.username, password: joinInData.password });
                    setLoggedIn(true);
                    navigate("/main");
                  }}
                />
              </Form>
            </>
          )}
        </ModalContainer>
      </ModalBackground>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 3rem;
  border: 1px solid var(--color-white);
  position: fixed;
  width: 25%;
  min-width: 270px;
  height: 65%;
  min-height: 600;
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: calc(100% - 2rem);
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 0 1rem 0;
`;

const Label = styled.label`
  color: #333;
`;

const Input = styled.input`
  width: calc(80% - 1rem);
  height: 2rem;
  border-radius: 5px;
  border-color: #7a7a7a;
`;
export default Modal;
