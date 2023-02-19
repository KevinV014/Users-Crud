import React from 'react'
import "./styles/Navbar.css"

const Navbar = ({handleClickShowModal}) => {

  return (
    <nav className='navbar'>
        <h1 className='navbar__title'>Users </h1>
        <button className='navbar__button' onClick={handleClickShowModal}><i className='navbar__plus bx bx-plus'></i>Create new user</button>
    </nav>
  )

}

export default Navbar