import React from 'react'
import './styles.css'
const Header = () => {
  return (
    <header className="header-container">
      <div className="header-title">
        <h1>My personal Challenges</h1>
      </div>
      <div className="header-wrapper--buttons">
        <a href="">Home</a>
      </div>
      <div className="header-line"></div>
      <div className="header-wrapper--icon">
        <a href="">icon</a>
        <a href="">icon</a>
        <a href="">icon</a>
      </div>
    </header>
  )
}

export default Header
