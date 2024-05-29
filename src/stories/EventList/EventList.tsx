import styled from "styled-components";
import { Product, InterPark } from "../ItemList/ItemList";

const EventList = ({ title, description, dateRange, image, href }: Product) => {
  return (
    <EventWrapper>
      <EventImage src={image} alt={title} />
      <EventTextWrapper>
        <EventTitle
          onClick={() => {
            location.href = href;
          }}
        >
          {" "}
          {title}
        </EventTitle>
        <EventDescription>{description}</EventDescription>
        <EventDateWrapper>
          시작 날짜: {dateRange.startDate} <br />
          종료 날짜: {dateRange.endDate}
        </EventDateWrapper>
      </EventTextWrapper>
    </EventWrapper>
  );
};

export const EventListForInterPark = ({ title, ticketOpenDate, image, href }: InterPark) => {
  return (
    <EventWrapper>
      <EventInterparkImage src={image} alt={title} />
      <EventTextWrapper>
        <EventTitle
          onClick={() => {
            location.href = href;
          }}
        >
          {" "}
          {title}
        </EventTitle>
        <EventDateWrapper>티켓 오픈 날짜: {ticketOpenDate}</EventDateWrapper>
      </EventTextWrapper>
    </EventWrapper>
  );
};

const EventWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  background-color: #fff4e6;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const EventTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  padding: 20px;
  flex: 1;
`;

const EventImage = styled.img`
  width: 50%;
  height: auto;
  object-fit: cover;
`;

const EventTitle = styled.div`
  font-size: 1.7rem;
  color: #333;
  font-weight: bold;
`

const EventDescription = styled.div`
  font-size: 1rem;
  color: #333;
  margin-bottom: 10px;
`;

const EventDateWrapper = styled.div`
  font-size: 1rem;
  color: #333;
`;

const EventInterparkImage = styled.img`
  width: 20%;
  height: auto;
  object-fit: cover;
`;

export default EventList;
