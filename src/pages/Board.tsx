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
      <BoardTitle>게시판 📌</BoardTitle>
      <Select>
        <Option value={"recent"}>최신순</Option>
        <Option value={"old"}>오래된 순</Option>
        <Option value={"comment"}>댓글 많은 순</Option>
        <Option value={"like"}>좋아요 많은 순</Option>
      </Select>
      <Button primary={false} size="small" label="조회" />
      <BoardContainer>
        {dummyData.length > 0 ? (
          dummyData.map((post) => {
            return (
              <PostWrapper>
                <PostTitle>제목 : {post.title}</PostTitle>
                <PostDate>작성 날짜 : {post.createdTime}</PostDate>
                <PostLike>좋아요 개수 : {post.likeCount}</PostLike>
                <PostComment>댓글 개수 : {post.commentCount}</PostComment>
              </PostWrapper>
            );
          })
        ) : (
          <Warning>작성된 게시글이 없습니다</Warning>
        )}
      </BoardContainer>
      {isLogIn && <Button primary={true} size="medium" label="작성하기" />}
    </BoardWrapper>
  );
};
const BoardWrapper = styled.div`
  width: 100%;
`;
const BoardTitle = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
`;
const BoardContainer = styled.div`
  width: 75%;
`;
const Select = styled.select``;
const Option = styled.option``;
const Warning = styled.div`
  color: #333;
  font-size: 1.7rem;
`;
const PostWrapper = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: row;
`;

const PostTitle = styled.div``;

const PostDate = styled.div``;
const PostLike = styled.div``;
const PostComment = styled.div``;
export default Board;
