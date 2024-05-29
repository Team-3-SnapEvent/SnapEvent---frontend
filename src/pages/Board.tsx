import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Header } from "../stories/Header/Header";
import { Button } from "../stories/Button/Button";
import { useRecoilValue } from "recoil";
import isLoggedIn from "../recoil/atoms";

const Board = () => {
  const navigate = useNavigate();
  const isLogIn = useRecoilValue(isLoggedIn);
  const dummyData = [
    {
      id: "sebin",
      title: "졸업 프로젝트 고생많으셨습니다!",
      likeCount: 3,
      commentCount: 999,
      createdTime: new Date().toLocaleDateString(),
      writerName: "sebin",
      myPost: true,
    },
    {
      id: "sebin1",
      title: "조금만 더 힘내보아요!",
      likeCount: 3,
      commentCount: 999,
      createdTime: new Date().toLocaleDateString(),
      writerName: "sebin",
      myPost: true,
    },
  ];

  return (
    <BoardWrapper>
      <Header
        onLogin={() => {
          navigate("/login");
        }}
        onLogout={() => {
          navigate("/login");
        }}
      />
      <ContentWrapper>
        <BoardTitle>게시판 📌</BoardTitle>
        <ControlsWrapper>
          <Select>
            <Option value={"recent"}>최신순</Option>
            <Option value={"old"}>오래된 순</Option>
            <Option value={"comment"}>댓글 많은 순</Option>
            <Option value={"like"}>좋아요 많은 순</Option>
          </Select>
          <Button primary={false} size="small" label="조회" />
        </ControlsWrapper>
        <BoardContainer>
          {dummyData.length > 0 ? (
            dummyData.map((post) => (
              <PostWrapper key={post.id}>
                <PostTitle>제목: {post.title}</PostTitle>
                <PostDate>작성 날짜: {post.createdTime}</PostDate>
                <PostLike>좋아요 개수: {post.likeCount}</PostLike>
                <PostComment>댓글 개수: {post.commentCount}</PostComment>
              </PostWrapper>
            ))
          ) : (
            <Warning>작성된 게시글이 없습니다</Warning>
          )}
        </BoardContainer>
        {isLogIn && <Button primary={true} size="medium" label="작성하기" />}
      </ContentWrapper>
    </BoardWrapper>
  );
};

const BoardWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  padding-top: 20px;
`;

const ContentWrapper = styled.div`
  width: 70%;
  max-width: 1200px;
  background-color: #fff4e6;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 20px;
`;

const BoardTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  border-bottom: 2px solid #ffbe98;
  padding-bottom: 10px;
`;

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Select = styled.select`
  padding: 5px 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Option = styled.option`
  font-size: 1rem;
`;

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Warning = styled.div`
  color: #d9534f;
  font-size: 1.5rem;
  text-align: center;
  padding: 20px;
`;

const PostWrapper = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const PostTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;

  &:hover {
    color: #ff6f61;
  }
`;

const PostDate = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const PostLike = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const PostComment = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

export default Board;
