import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../stories/Header/Header";
import { Button } from "../stories/Button/Button";

const Landing = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/login");
  };
  const onLogout = () => {
    navigate("/"); // 수정 필요 -> 로그인 과정 완료 시 작성.
  };

  const handleShare = () => {
    navigator.clipboard.writeText("https://snapevent.site");
    alert(" 📋클립보드에 링크가 복사되었어요! 친구들에게 공유해보세요");
  };

  return (
    <Container>
      <Header onLogin={onLogin} onLogout={onLogout} />
      <Content>
        <Image src="/sale.jpeg" />
        <HeadLineWrapper>
          <Head>세일 기간을 놓쳐서 아쉬웠던 적 있으셨나요?</Head>
        </HeadLineWrapper>
        <Text>
          SnapEvent는 관심 있는 브랜드를 구독하면
          <br />
          세일 기간에 알림을 보내드립니다.
          <br />
          마감 전 날까지도 알림을 받아보세요!
        </Text>
        <ButtonWrapper>
          <Button
            primary={false}
            label="서비스 중인 상품 구경하기"
            onClick={() => {
              navigate("/onboarding");
            }}
          />
        </ButtonWrapper>
      </Content>
      <Content>
        <Image src="/hands.jpeg" />
        <Text>
          SnapEvent를 친구에게 공유하고 함께
          <br />
          구독 상품을 공유해보세요!
          <br />
          새로운 상품을 발견하세요.
        </Text>
        <ButtonWrapper>
          <Button
            onClick={() => {
              handleShare();
            }}
            primary={false}
            label="공유하기"
          />
        </ButtonWrapper>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 2rem;
`;

const Content = styled.div`
  margin-top: 5rem;
  text-align: center;
`;

const Image = styled.img`
  width: 80%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const HeadLineWrapper = styled.div`
  margin-top: 1.5rem;
`;

const Head = styled.h1`
  color: #333;
  font-size: 2rem;
  line-height: 1.5;
`;

const Text = styled.p`
  color: #555;
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 1.5rem 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export default Landing;
