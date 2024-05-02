import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../stories/Button'
import useOpenModal from '../utils/useOpenModal'
import { Modal } from '../stories/Modal'
const APIURI = 'http://3.37.195.24//members/login'

interface LogInData {
  id: string,
  password: string
}

const LogIn = () => {
  const {isOpenModal, clickModal, closeModal} = useOpenModal();
  const [isJoin,setIsJoin] = useState(false);
  const logIn =  async(userdata: LogInData) : Promise<any> =>{
    try{
      const response = await fetch(APIURI,{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
      });
      
      if (response.ok) {
          const responseData = await response.json();
          console.log('성공');
          console.log(responseData);
          return responseData;
        } else {
          console.error('api 연결 실패.. :', response.status);
          throw new Error('API 호출 실패');
        }
      } catch (error) {
        console.error('api 호출 중 에러 생김:', error);
        throw error;
      }
  }

  return (
    <Login>
      <H1>SnapEvent logo</H1>
      <Div style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>Sign Up!</Div>
      <Div>로그인하고, 스냅 이벤트의 다양한 서비스를 누려보세요!</Div>
      <Button primary={false} label="회원가입" onClick={()=>{setIsJoin(true);clickModal();}} />
      <Button primary={true} label="로그인" onClick={()=>{setIsJoin(false);clickModal();}} />
      { isOpenModal && isJoin &&  <Modal title='Join In' onJoinIn={true} closeModal={closeModal} /*joinIn={}*/  />}
      { isOpenModal && !isJoin && <Modal title='Log In' onLogIn={true} closeModal={closeModal} logIn={LogIn}/>}
    </Login>
  )
}
const Login = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`
const H1 = styled.h1`
  color: black;
  font-size: 4.5rem;
`
const Div = styled.div`
  color: black;
  font-size: 1.5rem;
`

export default LogIn
