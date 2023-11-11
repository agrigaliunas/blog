import React from 'react'

export default function BurgerMenu({onOpenMenu}) {
  return (
    <button onClick={onOpenMenu} className="burger-menu-button">
        <span className="burger-menu-line"></span>
        <span className="burger-menu-line"></span>
        <span className="burger-menu-line"></span>
    </button>
  )
}
