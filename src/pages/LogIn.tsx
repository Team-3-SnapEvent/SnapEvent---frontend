import { useState } from "react";
import styled from "styled-components";
import { Button } from "../stories/Button";
import useOpenModal from "../utils/useOpenModal";
//import isLoggedIn from "../recoil/atoms";
import Modal from "../stories/Modal";
import logIn from "../apis/logIn";
import { useRecoilState } from "recoil";

const LogIn = () => {
  const { isOpenModal, clickModal, closeModal } = useOpenModal();
  const [isJoin, setIsJoin] = useState(false);
  //const [isLogIn, setIsLogIn] = useRecoilState(isLoggedIn);

  return (
    <Login>
      <H1>SnapEvent logo</H1>
      <Div style={{ fontWeight: "bold", fontSize: "2.5rem" }}>Sign Up!</Div>
      <Div>로그인하고, 스냅 이벤트의 다양한 서비스를 누려보세요!</Div>
      <Button
        primary={false}
        label="회원가입"
        onClick={() => {
          setIsJoin(true);
          clickModal();
        }}
      />
      <Button
        primary={true}
        label="로그인"
        onClick={() => {
          setIsJoin(false);
          clickModal();
        }}
      />
      {isOpenModal && isJoin && <Modal title="Join In" onJoinIn={true} closeModal={closeModal} /*joinIn={}*/ />}
      {isOpenModal && !isJoin && (
        <Modal
          title="Log In"
          onLogIn={true}
          closeModal={closeModal}
          logIn={(logIn({ username: "sebin", userPassword: "qwer" }), setIsLoggedIn(true))}
        />
      )}
    </Login>
  );
};
const Login = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const H1 = styled.h1`
  color: black;
  font-size: 4.5rem;
`;
const Div = styled.div`
  color: black;
  font-size: 1.5rem;
`;

export default LogIn;
