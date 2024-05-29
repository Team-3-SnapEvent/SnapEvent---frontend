import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Header } from "../stories/Header/Header";
import NavBar from "../stories/NavBar/NavBar";
import { useRecoilValue } from "recoil";
import { oliveYoung } from "../recoil/atoms";
import { Product } from "../stories/ItemList/ItemList";
import EventList from "../stories/EventList/EventList";

const Cosmetic = () => {
  const navigate = useNavigate();
  const oliveyoung = useRecoilValue<Product[]>(oliveYoung);

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
        <BrandName>올리브영 🫒</BrandName>
        {oliveyoung.map((item) => {
          return <EventList {...item} />;
        })}
      </BrandWrapper>
    </CosmeticContainer>
  );
};

const CosmeticContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;
const BrandWrapper = styled.div`
    width: 79vw;
    min-width: 400px;
    background: #fff;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin-top: 20px;
    margin-left: 35px;
    padding: 3vw;
`;
const BrandName = styled.h2`
  color: #333;
  font-size: 2.5em;
  text-align: left;
  margin-bottom: 20px;
  border-bottom: 3px solid #eee;
  padding-left: 10px;
  padding-bottom: 20px;
`;

export default Cosmetic;
