'use client'
import React, { useState } from 'react'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import Link from 'next/link'
import SubHeader from './SubHeader'

const Header = () => {

  const [subHeaderOpen, setSubHeaderOpen] = useState(false);
    
  const handleClick = () => {
      setSubHeaderOpen(!subHeaderOpen)
  }

  return (
    <header>
      <div className='header'>
        <div className='header-logo'>
          <h1 className='logo'>
            <Link href="/">Agustin Grigaliunas</Link>
          </h1>
          <h2 className='text-xs my-1'>
            Hecho con ❤️ @2023
          </h2>
        </div>
        <div className='header-right'>
          {/* <div className='header-create-note'>
            <button className='create-note-button'>
                Create note
              </button>
          </div> */}
          <div className='header-burger-menu'>
            <BurgerMenu onOpenMenu={handleClick}/>
          </div>
        </div>
      </div>
      {subHeaderOpen && <SubHeader />}
    </header>
  )
}

export default Header