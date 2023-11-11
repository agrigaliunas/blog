import React from 'react'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='header'>
      <div className='header-logo'>
        <h1 className='logo'>
          <Link href="/">Agustin Grigaliunas</Link>
        </h1>
      </div>
      <div className='header-burger-menu'>
        <BurgerMenu />
      </div>
    </header>
  )
}

export default Header