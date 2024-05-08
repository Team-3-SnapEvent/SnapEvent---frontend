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
            image: "brand1.jpg", // 이미지 경로 추가
            href: "1234",
        },
        {
            title: "ediya",
            description: "예시 데이터입니다",
            dateRange: { startDate: "2024-01-12", endDate: "2024-04-25" },
            image: "brand2.jpg", // 이미지 경로 추가
            href: "1234",
        },
        {
            title: "ssf",
            description: "예시 데이터입니다",
            dateRange: { startDate: "2024-01-12", endDate: "2024-04-25" },
            image: "brand3.jpg", // 이미지 경로 추가
            href: "1234",
        },
        {
            title: "Etc",
            description: "예시 데이터입니다",
            dateRange: { startDate: "2024-01-12", endDate: "2024-04-25" },
            image: "brand4.jpg", // 이미지 경로 추가
            href: "1234",
        },
    ];

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

    // 더미 글 데이터
    const posts = [
        { id: 1, title: "첫 번째 게시글" },
        { id: 2, title: "두 번째 게시글" },
        { id: 3, title: "세 번째 게시글" },
        { id: 4, title: "네 번째 게시글" },
        { id: 5, title: "다섯 번째 게시글" },
    ];

    return (
        <MainContainer>
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
            <Section>
                <Heading>000님이 구독 중인 브랜드</Heading>
                <BrandList>
                    {dummyData.length > 0 ? (
                        <CardWrapper>
                            {dummyData.map((brand) => (
                                <BrandCard key={brand.title}>
                                    <BrandImage src={brand.image} alt={brand.title} />
                                    <ItemList
                                        title={brand.title}
                                        dateRange={brand.dateRange}
                                        href={brand.href}
                                        description={brand.description}
                                    />
                                </BrandCard>
                            ))}
                        </CardWrapper>
                    ) : (
                        <NoBrandMessage>구독 중인 브랜드가 없습니다!</NoBrandMessage>
                    )}
                </BrandList>
            </Section>
            <Section>
                <Heading>000님이 팔로우 중인 000님이 구독 중인 브랜드</Heading>
                <BrandList>
                    {followerBrands.length > 0 ? (
                        <CardWrapper>
                            {followerBrands.map((brand) => (
                                <BrandCard key={brand.title}>
                                    <BrandImage src={brand.image} alt={brand.title} />
                                    <ItemList
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
            <BoardHeader>
                <h2>게시판</h2>

            </BoardHeader>
            <PostList>
                {posts.map((post) => (
                    <PostItem key={post.id}>{post.title}</PostItem>
                ))}
            </PostList>
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
    width: 200px; /* 이미지 크기 조절 */
    height: 200px;
    object-fit: cover;
    border-radius: 10px; /* 이미지에 원하는 모양의 테두리 설정 */
`;

const NoBrandMessage = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  color: black;
  margin-left: 3.7rem;
`;

const BoardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 5px solid #FFBE98;
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

export default Main;
