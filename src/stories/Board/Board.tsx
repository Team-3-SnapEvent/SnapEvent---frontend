import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import isLoggedIn from "../../recoil/atoms";
import { useEffect, useState } from "react";

export interface Post {
  id: number;
  title: string;
  likeCount: number;
  commentCount: number;
  createdTime: Date;
  writerName: string;
  myPost: boolean;
}

const Board = () => {
  const navigate = useNavigate();
  const recoilIsLoggedIn = useRecoilValue(isLoggedIn);
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "첫 번째 게시글",
      likeCount: 1,
      commentCount: 13,
      createdTime: new Date(),
      writerName: "sebin",
      myPost: false,
    },
  ]);
  useEffect(() => {
    (async () => {
      const response = await fetch("https://snapevent.site/api/posts/list/1/7/recent");
      if (!response.ok) {
        throw new Error("api 호출 실패 " + response.statusText);
      }
      const jsonResponse = await response.json();
      //console.log(jsonResponse.content); 빌드 시 삭제
      setPosts(jsonResponse.content);
    })();
  }, []);
  return (
    <div>
      <BoardHeader>
        <h2>게시판</h2>
      </BoardHeader>
      {posts && (
        <PostList>
          {posts.map((post) => (
            <PostItem
              onClick={() => {
                recoilIsLoggedIn ? navigate("/board") : alert("로그인 후에 이용 부탁드립니다!");
              }}
              key={post.id}
            >
              {post.title}
            </PostItem>
          ))}
        </PostList>
      )}
    </div>
  );
};

const BoardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 5px solid #ffbe98;
  padding: 1rem;
  margin-left: 4rem;
  margin-right: 2rem;
  margin-bottom: 1rem;
  h2 {
    font-size: 1.8rem;
    color: #333;
    margin: 3rem;
  }
`;

const PostList = styled.div`
  margin: 2rem auto;
  max-width: 1000px;
`;

const PostItem = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
`;

export default Board;
