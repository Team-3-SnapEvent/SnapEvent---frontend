import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Div>
        <Span onClick={() => navigate("/cosmetic")}>화장품</Span>
        <Span onClick={() => navigate("/cafe")}>카페</Span>
        <Span onClick={() => navigate("/concert")}>공연/티켓</Span>
        <Span onClick={() => navigate("/clothes")}>의류</Span>
        <Span onClick={() => navigate("/board")}>게시판</Span>
      </Div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 0;
  width: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Div = styled.div`
  margin: 1rem;
  width: 95%;
  height: 10%;
  display: flex;
  background-color: #ffbe98;
  justify-content: space-around;
  align-items: center;
  align-self: center;
`;
const Span = styled.span`
  color: black;
  font-size: 1.2rem;
  font-weight: bolder;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;
export default NavBar;
