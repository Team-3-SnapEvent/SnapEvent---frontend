import React from 'react'
import { useRecoilState } from 'recoil'
import { Button } from './Button'
import './modal.css'
import LogIn from '../pages/LogIn'
interface User {
  name: string
}

interface ModalProps {
  title: string
  user?: User
  alert?: string
  onLogIn?: boolean
  onJoinIn?: boolean
  closeModal? : ()=> void
  logIn?: () => void
  joinIn?: () => void
  checkDuplication? : () => void
  deleteFollowing?: () => void
  deleteSubscribing?: () => void
  fixAlarming?: () => void
  deleteAlarming?: () => void
  fixPersonalInfo?: () => void
  withdrawMembership?: () => void
}

export const Modal = ({ title, user, alert, onLogIn, onJoinIn,closeModal, checkDuplication, logIn, joinIn, deleteFollowing, deleteSubscribing, fixAlarming, deleteAlarming, fixPersonalInfo, withdrawMembership }: ModalProps) => (
    <div className='modal-wrapper'>
        <div className='modal-background'>
            <div className='modal-container'>
                <h1>{title}</h1>
                <h1 className='exit' onClick={closeModal}>X</h1>
                {onLogIn 
                    ? (
                    <> 
                        <form>
                            <label htmlFor='ID'>ID</label>
                            <input name='ID' type='text' id='ID' />
                            <label htmlFor='PASSWORD'>PASSWORD</label>
                            <input id='PASSWORD' name='password' type='text'/>
                            <Button label='로그인' onClick={LogIn}></Button>
                        </form>
                    </>
                       ) 
                    : (
                    <>
                        <form>
                            <label htmlFor='JOINID'>ID</label>
                            <input id ='JOINID' name = 'joinId' type='text' />
                            <label htmlFor='JOINDPASSWORD'>PASSWORD</label>
                            <input id = 'JOINPASSWORD' name = 'joinPassword' type ='text' />
                            <label htmlFor='NICKNAME'>닉네임</label>
                            <input id='NICKNAME' name='joinNickname' type='text'/>
                            <Button label='중복 확인' onClick={checkDuplication}/>
                            <Button label='회원가입' onClick={joinIn} />
                        </form>
                    </>
                        )}
            </div>
        </div>
    </div>
)
