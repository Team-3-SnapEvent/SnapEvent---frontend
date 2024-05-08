import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../stories/Header";
import ItemList from "../stories/ItemList/ItemList";
import { Product } from "../stories/ItemList/ItemList";

const OnBoarding = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header
        onLogin={() => {
          navigate("/login");
        }}
      />
      <H1>구독할 상품을 골라 주세요!</H1>
      <Div>화장품</Div>
      <Div>카페</Div>
      <Div>공연/티켓</Div>
      <Div>의류</Div>
    </div>
  );
};
const H1 = styled.h1`
  color: black;
  font-weight: bold;
`;

const Div = styled.div`
  color: black;
  font-weight: bold;
  font-size: 1.5rem;
`;
export default OnBoarding;
