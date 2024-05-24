import { useState } from "react";
import styled from "styled-components";
import { Button } from "../stories/Button/Button";
import useOpenModal from "../utils/useOpenModal";
import Modal from "../stories/Modal/Modal";
import socialLogIn, { socialKakao, socialNaver } from "../apis/socialLogIn";

const LogIn = () => {
  const { isOpenModal, clickModal, closeModal } = useOpenModal();
  const [isJoin, setIsJoin] = useState(false);

  return (
    <LoginContainer>
      <Logo>🔥 SnapEvent 🔥</Logo>
      <Title>회원가입 또는 로그인하세요!</Title>
      <Description>스냅 이벤트의 다양한 서비스를 이용해보세요.</Description>
      <ButtonContainer>
        <Button
          primary={false}
          size="large"
          label="회원가입"
          onClick={() => {
            setIsJoin(true);
            clickModal();
          }}
        />
        <Button
          primary={true}
          size="large"
          label="로그인"
          onClick={() => {
            setIsJoin(false);
            clickModal();
          }}
        />
      </ButtonContainer>
      <Line />
      <KakaoWrapper onClick={socialKakao} >
        <Image src="/kakao.png"/>
        <SocialText>카카오로 로그인</SocialText>
      </KakaoWrapper>
      <NaverWrapper onClick={socialNaver} >
        <Image src="/naver.svg" />
        <SocialText>네이버로 로그인</SocialText>
      </NaverWrapper>
      <GoogleWrapper onClick={socialLogIn} >
        <Image src="/google.png" />
        <SocialText>구글로 로그인</SocialText>
      </GoogleWrapper>
      {isOpenModal && <Modal title={isJoin ? "Join In" : "Log In"} closeModal={closeModal} onLogIn={!isJoin} />}
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const Logo = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1.3rem;
  color: #777;
  margin-bottom: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
const Line = styled.hr`
  margin-top: 2rem;
  border: solid 0.7px #777;
  width: 370px;
`;
const KakaoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 20vw;
    background-color: #FEE500;
    border: 2px solid #FEE500; 
    border-radius: 5px; 
    margin-top: 0.5rem; 
`;
const SocialText = styled.p`
  font-size: 0.95rem;
  color: #300;
`;
const NaverWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 20vw;
    background-color: #00C73C;
    border: 2px solid #00C73C; 
    border-radius: 5px; 
    margin-top: 0.5rem; 
`;
const GoogleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 20vw;
    border: 2px solid #999999; 
    border-radius: 5px; 
    margin-top: 0.5rem; 
`;
const Image = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 5px;
  margin: 0.5rem 3rem 0.5rem 1rem;
`;
export default LogIn;
