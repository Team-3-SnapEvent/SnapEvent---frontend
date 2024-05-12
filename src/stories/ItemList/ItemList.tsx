import styled from "styled-components";
import { Button } from "../Button/Button";

export interface InterPark {
  title: string;
  ticketOpenDate: string;
  href: string;
  image: string;
} // 인터파크의 크롤링 데이터 타입만 달라서 따로 설정

export interface Product {
  title: string;
  description?: string;
  dateRange: {
    startDate: string;
    endDate: string;
  };
  image: string;
  href: string;
} //올리브영, ssf, ediya가 여기에 해당

const ItemList = ({ title, description, dateRange, image, href }: Product) => {
  return (
    <Item>
      <ItemImg src={image} />
      <ItemDescription>
        <ItemTitle href={href}>{title}</ItemTitle>
        {description && <ItemText>{description}</ItemText>}
        <ItemText>📅 시작 날짜 📅 : {dateRange.startDate}</ItemText>
        <ItemText>📅 종료 날짜 📅 : {dateRange.endDate}</ItemText>
        <ButtonWrapper>
          <Button primary={true} size="medium" label="알림 설정" />
        </ButtonWrapper>
      </ItemDescription>
    </Item>
  );
};

export const ItemListForInterPark = ({ title, ticketOpenDate, image, href }: InterPark) => {
  return (
    <Item>
      <ItemImg src={image} />
      <ItemDescription>
        <ItemTitle href={href}>{title}</ItemTitle>
        <ItemText>📅 시작 날짜 📅 : {ticketOpenDate}</ItemText>
        <ButtonWrapper>
          <Button primary={true} size="medium" label="알림 설정" />
        </ButtonWrapper>
      </ItemDescription>
    </Item>
  );
};

const Item = styled.div`
  width: 40%;
  min-width: 250px;
  height: 70%;
  margin: 0.8rem;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  overflow: hidden;
`;

const ItemImg = styled.img`
  width: 100%;
  height: 60%;
  object-fit: contain;
`;

const ItemDescription = styled.div`
  padding: 1rem;
  justify-content: space-evenly;
`;

const ItemTitle = styled.a`
  color: #333;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

const ItemText = styled.p`
  color: #555;
  font-size: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export default ItemList;
