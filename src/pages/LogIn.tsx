import { useState } from "react";
import styled from "styled-components";
import { Button } from "../stories/Button/Button";
import useOpenModal from "../utils/useOpenModal";
import Modal from "../stories/Modal/Modal";
import logIn from "../apis/logIn";

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
            </ButtonContainer>
            {isOpenModal && (
                <Modal
                    title={isJoin ? "Join In" : "Log In"}
                    closeModal={closeModal}
                    onSubmit={data => {
                        if (isJoin) {
                            // 회원가입 처리
                        } else {
                            // 로그인 처리
                            logIn({ username: data.username, userPassword: data.userPassword });
                        }
                    }}
                    isJoin={isJoin}
                />
            )}
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
  font-size: 1rem;
  color: #777;
  margin-bottom: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export default LogIn;
