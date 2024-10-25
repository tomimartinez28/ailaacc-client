import React from 'react'
import './HamburguerIcon.css'

export default function HamburgerMenu ({ onClick, isMenuOpen }) {
  return (
    <div className='hamburger-container' onClick={onClick}>
      <div className={`line top-line ${isMenuOpen ? 'open' : ''}`} />
      <div className={`line middle-line ${isMenuOpen ? 'open' : ''}`} />
      <div className={`line bottom-line ${isMenuOpen ? 'open' : ''}`} />
    </div>
  )
}
