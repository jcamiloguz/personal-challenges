import React from 'react'
import './styles.css'
const SocialIcon = ({ link = '', img = '', alt, color }) => (
  <a className={`socialIcon ${alt}`} href={link}>
    <img src={img} alt={alt} />
  </a>
)

export default SocialIcon
