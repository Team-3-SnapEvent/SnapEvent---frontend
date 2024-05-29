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
        {isLogIn ? <Title>마이페이지</Title> : <Warning>로그인 후에 사용 가능한 페이지입니다!</Warning>}
        {isLogIn && (
          <ListWrapper>
            <ListText>팔로잉/팔로워 목록</ListText>
            <ListText>내가 구독한 브랜드 리스트</ListText>
            <ListText>알림 설정</ListText>
            <ListText>개인 정보 수정</ListText>
            <ListText>회원 탈퇴</ListText>
          </ListWrapper>
        )}
      </ContentContainer>
    </MyPageWrapper>
  );
};
const MyPageWrapper = styled.div`
  width: 100%;
  display: block;
  justify-content: center;
  align-items: center;
`;
const ContentContainer = styled.div`
  width: 70%;
  background-color: #fff4e6;
`;
const Warning = styled.div`
  font-size: 2rem;
  color: #333;
`;

const Title = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
`;

const ListWrapper = styled.div`
  width: 70%;
`;
const ListText = styled.div`
  width: 100%;
  color: #333;
  font-size: 1rem;
`;

export default MyPage;
