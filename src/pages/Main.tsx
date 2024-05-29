import styled from "styled-components";
import { Header } from "../stories/Header/Header";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../stories/NavBar/NavBar";
import ItemList, { Product } from "../stories/ItemList/ItemList";
import Board from "../stories/Board/Board";
import isLoggedIn, { accessToken } from "../recoil/atoms";
import useSubscribing from "../apis/getSubscribing";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect } from "react";

const Main = () => {
  const navigate = useNavigate();
  const { data, error } = useSubscribing();
  {
    error && console.log(error);
  }
  const isLogIn = useRecoilValue(isLoggedIn);
  const brandList: string[] = ["OliveYoung", "SSFShop", "Interpark", "EdiyaCoffee"];
  const location = useLocation();
  const setAccessToken = useSetRecoilState(accessToken);
  const acessTOKEN = useRecoilValue(accessToken);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("accessToken");

    if (token) {
      setAccessToken(token);
      navigate("/main", { replace: true });
    }
  }, [location, setAccessToken, navigate, acessTOKEN]);

  // 팔로워의 브랜드 목록 데이터 (예시)
  const followerBrands: Product[] = [
    {
      title: "brandA",
      description: "예시 데이터입니다",
      dateRange: { startDate: "2024-01-12", endDate: "2024-04-25" },
      image: "follower1.jpg", // 이미지 경로 추가
      href: "1234",
    },
    {
      title: "brandB",
      description: "예시 데이터입니다",
      dateRange: { startDate: "2024-01-12", endDate: "2024-04-25" },
      image: "follower2.jpg", // 이미지 경로 추가
      href: "1234",
    },
    {
      title: "brandC",
      description: "예시 데이터입니다",
      dateRange: { startDate: "2024-01-12", endDate: "2024-04-25" },
      image: "follower3.jpg", // 이미지 경로 추가
      href: "1234",
    },
    {
      title: "brandD",
      description: "예시 데이터입니다",
      dateRange: { startDate: "2024-01-12", endDate: "2024-04-25" },
      image: "follower4.jpg", // 이미지 경로 추가
      href: "1234",
    },
    {
      title: "brandE",
      description: "예시 데이터입니다",
      dateRange: { startDate: "2024-01-12", endDate: "2024-04-25" },
      image: "follower5.jpg", // 이미지 경로 추가
      href: "1234",
    },
  ];

  return (
    <MainContainer>
      <Header
        onLogin={() => {
          navigate("/login");
        }}
        onLogout={() => {
          navigate("/login");
        }}
      />
      <NavBar />
      <Section>
        {isLogIn && accessToken ? <Heading>구독 중인 브랜드</Heading> : <Heading>서비스 중인 브랜드</Heading>}
        {isLogIn && accessToken ? (
          <BrandList>
            {data.length > 0 ? (
              <CardWrapper>
                {data.map((brand) => (
                  <BrandCard key={brand.id}>
                    <BrandImage src={`/${brand.subedSiteName}.jpg`} alt={`/${brand.subedSiteName}.jpg`} />
                    {/* <ItemList
                    image={brand.image}
                    title={brand.title}
                    dateRange={brand.dateRange}
                    href={brand.href}
                    description={brand.description}
                  /> */}{" "}
                    {/* 나중에 여기 알림 설정한 이벤트 리스트를 뜨게 할 겁니다..! */}
                  </BrandCard>
                ))}
              </CardWrapper>
            ) : (
              <NoBrandMessage>구독 중인 브랜드가 없습니다!</NoBrandMessage>
            )}
          </BrandList>
        ) : (
          <BrandList>
            <CardWrapper>
              {brandList.map((brand) => (
                <BrandCard key={brand}>
                  <BrandImage src={`/${brand}.jpg`} alt={`/${brand}.jpg`} />
                  {/* <ItemList
                    image={brand.image}
                    title={brand.title}
                    dateRange={brand.dateRange}
                    href={brand.href}
                    description={brand.description}
                  /> */}
                </BrandCard>
              ))}
            </CardWrapper>
          </BrandList>
        )}
      </Section>
      {isLogIn && (
        <Section>
          <Heading>000님이 팔로우 중인 000님이 구독 중인 브랜드</Heading>
          <BrandList>
            {followerBrands.length > 0 ? (
              <CardWrapper>
                {followerBrands.map((brand) => (
                  <BrandCard key={brand.title}>
                    <BrandImage src={brand.image} alt={brand.title} />
                    <ItemList
                      image={brand.image}
                      title={brand.title}
                      dateRange={brand.dateRange}
                      href={brand.href}
                      description={brand.description}
                    />
                  </BrandCard>
                ))}
              </CardWrapper>
            ) : (
              <NoBrandMessage>팔로우 중인 브랜드가 없습니다!</NoBrandMessage>
            )}
          </BrandList>
        </Section>
      )}
      <Board />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  padding: 2rem;
`;

const Section = styled.section`
  margin-top: 2rem;
`;

const Heading = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  color: black;
  margin-left: 3.7rem;
`;

const BrandList = styled.div`
  overflow-x: auto;
  padding-bottom: 1rem;
  margin-left: 3.7rem;
  max-width: 1300px;
`;

const CardWrapper = styled.div`
  display: flex;
`;

const BrandCard = styled.div`
  width: 400px;
  height: 300px;
  margin: 1rem;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  flex: 0 0 auto;
`;

const BrandImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

const NoBrandMessage = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  color: black;
  margin-left: 3.7rem;
`;

export default Main;
