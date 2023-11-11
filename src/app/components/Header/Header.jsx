import React from 'react'
import BurgerMenu from '../BurgerMenu/BurgerMenu'

const Header = () => {
  return (
    <header className='header'>
      <div className='header-logo'>
        <h1 className='logo'>Agustin Grigaliunas</h1>
      </div>
      <div className='header-burger-menu'>
        <BurgerMenu />
      </div>
    </header>
  )
}

export default Header