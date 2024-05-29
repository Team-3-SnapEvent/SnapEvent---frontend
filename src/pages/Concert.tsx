import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { InterPark } from "../stories/ItemList/ItemList";
import { interPark } from "../recoil/atoms";
import { Header } from "../stories/Header/Header";
import NavBar from "../stories/NavBar/NavBar";
import { EventListForInterPark } from "../stories/EventList/EventList";

const Cosmetic = () => {
  const navigate = useNavigate();
  const interpark = useRecoilValue<InterPark[]>(interPark);

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
        <BrandName>인터파크 🎪</BrandName>
        {interpark.map((item)=>{return <EventListForInterPark {...item} />})}
      </BrandWrapper>
    </CosmeticContainer>
  );
};

const CosmeticContainer = styled.div``;

const BrandWrapper = styled.div``;
const BrandName = styled.h2`
  color: #333;
`;



export default Cosmetic;