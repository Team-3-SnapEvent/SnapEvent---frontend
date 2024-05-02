import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Header } from '../stories/Header'

const OnBoarding = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Header onLogin={()=>{navigate('/login')}} />
      <H1>구독할 상품을 골라 주세요!</H1>
      <Div>화장품</Div>
      <Div>카페</Div>
    </div>
  )
}
const H1 = styled.h1`
  color: black;
  font-weight: bold;
`

const Div = styled.div`
  color: black;
  font-weight:bold;
  font-size: 1.5rem;
`
export default OnBoarding
