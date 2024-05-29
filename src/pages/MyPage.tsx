import styled from "styled-components";
import { Header } from "../stories/Header/Header";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import isLoggedIn from "../recoil/atoms";

const MyPage = () => {
  const navigate = useNavigate();
  const isLogIn = useRecoilValue(isLoggedIn);

  return (
    <MyPageWrapper>
      <Header
        onLogin={() => {
          navigate("/login");
        }}
        onLogout={() => {
          navigate("/login");
        }}
      />
      <ContentContainer>
        {isLogIn ? (
          <>
            <Title>마이페이지</Title>
            <ListWrapper>
              <ListText>팔로잉/팔로워 목록</ListText>
              <ListText>내가 구독한 브랜드 리스트</ListText>
              <ListText>알림 설정</ListText>
              <ListText>개인 정보 수정</ListText>
              <ListText>회원 탈퇴</ListText>
            </ListWrapper>
          </>
        ) : (
          <Warning>로그인 후에 사용 가능한 페이지입니다!</Warning>
        )}
      </ContentContainer>
    </MyPageWrapper>
  );
};

const MyPageWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  align-items: center;
`;

const ContentContainer = styled.div`
  width: 70%;
  max-width: 800px;
  background-color: #fff4e6;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 20px;
`;

const Warning = styled.div`
  font-size: 1.5rem;
  color: #d9534f;
  text-align: center;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
  border-bottom: 2px solid #ffbe98;
  padding-bottom: 10px;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
`;

const ListText = styled.div`
  font-size: 1.2rem;
  color: #333;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #ff6f61;
  }
`;

export default MyPage;
