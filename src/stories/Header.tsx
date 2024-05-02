import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from './Button'
import './header.css'

interface User {
  name: string
}

interface HeaderProps {
  user?: User
  onLogin?: () => void
  onLogout?: () => void
}

export const Header = ({ user, onLogin, onLogout }: HeaderProps) => (
  <header>
    <div className="storybook-header">
      <div>
        <h1>SnapEvent Logo</h1>
      </div>
      <div>
        {user
          ? (
          <>
            <span className="welcome">
              마이페이지
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
            )
          : (
          <>
            <Button primary size="small" onClick={onLogin} label="Log In" />
          </>
            )}
      </div>
    </div>
  </header>
)
