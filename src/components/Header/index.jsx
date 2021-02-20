import React from 'react'
import SocialIcon from '../SocialIcon/index.jsx'

import './styles.css'
import icon from './icon.svg'
import iconGh from './Gh.png'
import iconTw from './Tw.png'
import iconYt from './Yt.png'
//TODO use react-icons
const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-title">
          <img src={icon} alt="" />
          <h1>My personal Challenges</h1>
        </div>
        <nav className="header-nav">
          <div className="header-wrapper--buttons">
            <a href="">Home</a>
          </div>
          <div className="header-line"></div>
          <div className="header-wrapper--icon">
            <SocialIcon img={iconTw} />
            <SocialIcon img={iconGh} />
            <SocialIcon img={iconYt} />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
