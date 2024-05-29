import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Header } from "../stories/Header/Header";
import NavBar from "../stories/NavBar/NavBar";
//import { oliveYoung } from "../recoil/atoms";
//import { useEffect } from "react";
//import { useRecoilValue } from "recoil";

const Cosmetic = () => {
  const navigate = useNavigate();
  //const crawledData = useRecoilValue(oliveYoung);

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
