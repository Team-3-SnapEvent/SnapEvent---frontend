import styled from "styled-components";
import { Header } from "../stories/Header";
import { useNavigate } from "react-router-dom";
import NavBar from "../stories/NavBar";
import ItemList, { Product } from "../stories/ItemList/ItemList";

const Main = () => {
  const navigate = useNavigate();
  const dummyData: Product[] = [
    {
      title: "oliveyoung",
      description: "예시 데이터입니다",
      dateRange: { startDate: "2024-01-12", endDate: "2024-04-25" },
      image: "1234",
      href: "1234",
    },
    {
      title: "ediya",
      description: "예시 데이터입니다",
      dateRange: { startDate: "2024-01-12", endDate: "2024-04-25" },
      image: "1234",
      href: "1234",
    },
    {
      title: "ssf",
      description: "예시 데이터입니다",
      dateRange: { startDate: "2024-01-12", endDate: "2024-04-25" },
      image: "1234",
      href: "1234",
    },
    {
      title: "Etc",
      description: "예시 데이터입니다",
      dateRange: { startDate: "2024-01-12", endDate: "2024-04-25" },
      image: "1234",
      href: "1234",
    },
  ];
  return (
    <div>
      <Header
        user={{ name: "sebin" }}
        onLogin={() => {
          navigate("/login");
        }}
        onLogout={() => {
          navigate("/login");
        }}
      />
      <NavBar />
      <Div>000님이 구독 중인 브랜드</Div>
      <ItemWrapper>
        {dummyData ? (
          <>
            {dummyData.map((e) => (
              <ItemList
                title={e.title}
                dateRange={e.dateRange}
                image={e.image}
                href={e.href}
                description={e.description}
              />
            ))}
          </>
        ) : (
          <>
            <Div>!구독 중인 브랜드가 없습니다!</Div>
          </>
        )}
      </ItemWrapper>
      <Div>000님이 팔로우 중인 000님이 구독 중인 브랜드</Div>

    </div>
  );
};

const Div = styled.div`
  font-weight: bolder;
  font-size: 1.2rem;
  color: black;
  margin-left: 3.7rem;
`;
const ItemWrapper = styled.div`
  display: flex;
  flex-direction:row;
`
export default Main;
