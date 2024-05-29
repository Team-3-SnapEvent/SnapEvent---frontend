import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Header } from "../stories/Header/Header";
import NavBar from "../stories/NavBar/NavBar";
import { useRecoilValue } from "recoil";
import { ediya } from "../recoil/atoms";
import { Product } from "../stories/ItemList/ItemList";
import EventList from "../stories/EventList/EventList";

const Clothes = () => {
  const navigate = useNavigate();
  const Ediya = useRecoilValue<Product[]>(ediya);

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
        <BrandName>이디야 🧋</BrandName>
        {Ediya.map((item)=>{return <EventList {...item} />})}
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

