import { useState } from "react";
import styled from "styled-components";
import { Button } from "../stories/Button/Button";
import useOpenModal from "../utils/useOpenModal";
import Modal from "../stories/Modal/Modal";
import useSocialLogIn from "../utils/useSocialLogIn";

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
      <KakaoWrapper onClick={() => useSocialLogIn("https://snapevent.site/oauth2/authorization/kakao")}>
        <Image src="/kakao.png" />
        <SocialText>카카오로 로그인</SocialText>
      </KakaoWrapper>
      <NaverWrapper onClick={() => useSocialLogIn("https://snapevent.site/oauth2/authorization/naver")}>
        <Image src="/naver.svg" />
        <SocialText>네이버로 로그인</SocialText>
      </NaverWrapper>
      <GoogleWrapper onClick={() => useSocialLogIn("https://snapevent.site/oauth2/authorization/google")}>
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
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 240px;
  height: 47px;
  background-color: ${({ color }) => color || "#fff"};
  border: 2px solid ${({ color }) => color || "#999"};
  border-radius: 5px;
  margin-top: 0.5rem;
  position: relative;
`;
const KakaoWrapper = styled(Wrapper)`
  background-color: #fee500;
  border-color: #fee500;
`;
const SocialText = styled.p`
  font-size: 15px;
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #300;
  margin-left: 30px;
`;
const NaverWrapper = styled(Wrapper)`
  background-color: #00c73c;
  border-color: #00c73c;
`;

const GoogleWrapper = styled(Wrapper)`
  background-color: #ffffff;
  border-color: #999999;
`;
const Image = styled.img`
  width: 30px;
  border-radius: 5px;
  margin-left: 1vw;
`;
export default LogIn;
