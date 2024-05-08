import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../stories/Header";
import ItemList from "../stories/ItemList/ItemList";
import { Product } from "../stories/ItemList/ItemList";

const OnBoarding = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Header
                onLogin={() => {
                    navigate("/login");
                }}
            />
            <Content>
                <Heading>구독할 상품을 골라 주세요!</Heading>
                <Categories>
                    <Category>
                        <CategoryImage src="/ex1.jpg" />
                        <CategoryDescription>
                            <CategoryTitle>화장품</CategoryTitle>
                            <CategoryText>사진이 더 들어가도 괜찮을거같기도</CategoryText>
                            <CategoryText>크롤링 내용</CategoryText>
                            <CategoryText>크롤링 내용</CategoryText>
                            <CategoryText>크롤링 내용</CategoryText>
                            <CategoryText>크롤링 내용</CategoryText>
                            <ActionButtons>
                                <Button onClick={() => {/* 알림 설정 */}}>알림 설정</Button>
                                <CheckboxContainer>
                                    <Checkbox type="checkbox" id="subscribe-cosmetics" name="subscribe-cosmetics" />
                                    <Label htmlFor="subscribe-cosmetics">구독하기</Label>
                                </CheckboxContainer>
                            </ActionButtons>
                        </CategoryDescription>
                    </Category>
                    <Category>
                        <CategoryImage src="/ex2.jpg" />
                        <CategoryDescription>
                            <CategoryTitle>카페</CategoryTitle>
                            <CategoryText>늘려서 한줄에 카드 2장?</CategoryText>
                            <CategoryText>크롤링 내용</CategoryText>
                            <CategoryText>크롤링 내용</CategoryText>
                            <CategoryText>크롤링 내용</CategoryText>
                            <CategoryText>크롤링 내용</CategoryText>
                            <ActionButtons>
                                <Button onClick={() => {/* 알림 설정 */}}>알림 설정</Button>
                                <CheckboxContainer>
                                    <Checkbox type="checkbox" id="subscribe-cafe" name="subscribe-cafe" />
                                    <Label htmlFor="subscribe-cafe">구독하기</Label>
                                </CheckboxContainer>
                            </ActionButtons>
                        </CategoryDescription>
                    </Category>
                    <Category>
                        <CategoryImage src="/ex3.jpg" />
                        <CategoryDescription>
                            <CategoryTitle>공연/티켓</CategoryTitle>
                            <CategoryText>크롤링 내용</CategoryText>
                            <CategoryText>크롤링 내용</CategoryText>
                            <CategoryText>크롤링 내용</CategoryText>
                            <CategoryText>크롤링 내용</CategoryText>
                            <CategoryText>크롤링 내용</CategoryText>
                            <ActionButtons>
                                <Button onClick={() => {/* 알림 설정 */}}>알림 설정</Button>
                                <CheckboxContainer>
                                    <Checkbox type="checkbox" id="subscribe-ticket" name="subscribe-ticket" />
                                    <Label htmlFor="subscribe-ticket">구독하기</Label>
                                </CheckboxContainer>
                            </ActionButtons>
                        </CategoryDescription>
                    </Category>
                    <Category>
                        <CategoryImage src="/ex4.jpg" />
                        <CategoryDescription>
                            <CategoryTitle>의류</CategoryTitle>
                            <CategoryText>크롤링 내용</CategoryText>
                            <CategoryText>크롤링 내용</CategoryText>
                            <CategoryText>크롤링 내용</CategoryText>
                            <CategoryText>크롤링 내용</CategoryText>
                            <CategoryText>크롤링 내용</CategoryText>
                            <ActionButtons>
                                <Button onClick={() => {/* 알림 설정 */}}>알림 설정</Button>
                                <CheckboxContainer>
                                    <Checkbox type="checkbox" id="subscribe-clothes" name="subscribe-clothes" />
                                    <Label htmlFor="subscribe-clothes">구독하기</Label>
                                </CheckboxContainer>
                            </ActionButtons>
                        </CategoryDescription>
                    </Category>
                    <Category>
                        <CategoryImage src="/ex4.jpg" />
                        <CategoryDescription>
                            <CategoryTitle>추가?</CategoryTitle>
                            <CategoryText>크롤링 내용</CategoryText>
                            <CategoryText>크롤링 내용</CategoryText>
                            <CategoryText>크롤링 내용</CategoryText>
                            <CategoryText>크롤링 내용</CategoryText>
                            <CategoryText>크롤링 내용</CategoryText>
                            <ActionButtons>
                                <Button onClick={() => {/* 알림 설정 */}}>알림 설정</Button>
                                <CheckboxContainer>
                                    <Checkbox type="checkbox" id="subscribe-x" name="subscribe-x" />
                                    <Label htmlFor="subscribe-x">구독하기</Label>
                                </CheckboxContainer>
                            </ActionButtons>
                        </CategoryDescription>
                    </Category>
                </Categories>
                <SubscribeButton onClick={() => {/* 구독하기 */}}>구독하기</SubscribeButton>
            </Content>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    padding: 2rem;
`;

const Content = styled.div`
    margin-top: 3rem;
`;

const Heading = styled.h1`
    color: #333;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
`;

const Categories = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
`;

const Category = styled.div`
    width: calc(25% - 2rem);
    margin: 1rem;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    overflow: hidden;
`;

const CategoryImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

const CategoryDescription = styled.div`
    padding: 1rem;
`;

const CategoryTitle = styled.h2`
    color: #333;
    font-size: 1.5rem;
    font-weight: bold;
`;

const CategoryText = styled.p`
    color: #555;
    font-size: 1rem;
`;

const ActionButtons = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
`;

const Button = styled.button`
    padding: 0.5rem 1rem;
    background-color: #F08080;
    color: #fff;
    border: none;
    border-radius: 5px;
    margin-right: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #555;
    }
`;

const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Checkbox = styled.input`
    margin-right: 0.5rem;
`;

const Label = styled.label`
    font-size: 0.9rem;
`;

const SubscribeButton = styled.button`
    display: block;
    margin: 2rem auto;
    padding: 1rem 5rem;
    background-color: #98C8FF;
    outline: solid;
    outline-color: #98C8FF;
    color: #2858c7;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #555;
    }
`;

export default OnBoarding;
