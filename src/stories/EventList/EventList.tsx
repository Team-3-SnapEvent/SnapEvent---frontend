import styled from "styled-components";
import { Product, InterPark } from "../ItemList/ItemList";

const EventList = ({ title, description, dateRange, image, href }: Product) => {
    return(
        <EventWrapper>
            <EventImage src={image} />
            <EventTextWrapper>
            <EventTitle onClick={()=>{location.href = href}}> {title}</EventTitle>
            <EventDescription>{description}</EventDescription>
            <EventDateWrapper>
                시작 날짜 : {dateRange.startDate} <br />
                종료 날짜 : {dateRange.endDate}
            </EventDateWrapper>
            </EventTextWrapper>
        </EventWrapper>
    )
};

export const EventListForInterPark = ({ title, ticketOpenDate, image, href }: InterPark) => {
    return(
        <EventWrapper>
            <EventImage src={image} />
            <EventTextWrapper>
            <EventTitle onClick={()=>{location.href = href}}> {title}</EventTitle>
            <EventDateWrapper>
                티켓 오픈 날짜 : {ticketOpenDate} 
            </EventDateWrapper>
            </EventTextWrapper>
        </EventWrapper>
    )
}
const EventWrapper = styled.div`
  width: 70%;
  height: auto;
  background-color: #333;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const EventTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const EventImage = styled.img`
  width: 50%;
`

const EventTitle = styled.div`
  font-size: 1.7rem;
  color: white;
  font-weight: bold;
`

const EventDescription = styled.div`
  font-size: 1rem;
  color: white;
`

const EventDateWrapper = styled.div`
font-size: 1rem;
color: white;
`

export default EventList;