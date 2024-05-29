import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Header } from "../stories/Header/Header";
import NavBar from "../stories/NavBar/NavBar";
import { useRecoilValue } from "recoil";
import { oliveYoung, ssf } from "../recoil/atoms";
import { Product } from "../stories/ItemList/ItemList";
import EventList from "../stories/EventList/EventList";

const Clothes = () => {
  const navigate = useNavigate();
  const SSF = useRecoilValue<Product[]>(ssf);

  return (
    <CosmeticContainer>
      <Header
        onLogin={() => {
          navigate("/login");
        }}
        onLogout={() => {
          navigate("/login");
        }}
      />
      <NavBar />
      <BrandWrapper>
        <BrandName>SSF 👕</BrandName>
        {SSF.map((item)=>{return <EventList {...item} />})}
      </BrandWrapper>
    </CosmeticContainer>
  );
};

const CosmeticContainer = styled.div``;

const BrandWrapper = styled.div``;
const BrandName = styled.h2`
  color: #333;
`;



export default Clothes;
