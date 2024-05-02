import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Header } from '../stories/Header'
import { Button } from '../stories/Button'

const Landing = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/login")
    console.log('동작중')
  }
  const onLogout = () =>{
    navigate('/')
  }

  return (
    <div>
      <Header onLogin={onLogin} onLogout={onLogout} />
      <HeadLineWrapper>
        <Head>세일 기간을 놓쳐서 </Head>
        <Head>아쉬웠던 적 있으셨나요?</Head>
      </HeadLineWrapper>
      <Image src='/sale.jpeg'/>
      <Div>SnapEvent는 관심 있는 브랜드를 구독하면 세일 기간에 세일 상품에 대해 알림을 보내주는 서비스를 제공합니다. 세일 마감 직전까지 구독을 취소하지 않으면, 마감 전 날까지도 알림을 받아보실 수 있어요....!</Div>
      <Button primary={false} label='서비스 중인 상품 구경하기' onClick={()=>{navigate('/onboarding')}} />
      <Image src= '/hands.jpeg' />
      <Head>친구를 팔로우하고 구독 상품을 공유해요</Head>
      <Div>이 서비스를 친구에게 공유해 서로 팔로우해보세요. 서로의 구독 상품을 공유할 수 있어요! 또, 구독 서비스가 제공되지 않는 상품의 세일 정보는 게시판을 통해 확인할 수 있어요. </Div>
      <Button primary={false} label='공유하기'/>
    </div>
  )
}

const HeadLineWrapper = styled.div`
  margin-top: 1rem;
`

const Head = styled.h1`
  color:black;
  margin: 0;
`
const Image = styled.img`
  width:90%;
  height: auto;
  margin: 1rem;
`

const Div = styled.div`
  font-size: large;
  font-weight: bold;
  margin: 1rem;
`
export default Landing
