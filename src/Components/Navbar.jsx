import React from 'react'

const Navbar = ({handleClickShowModal}) => {

  return (
    <nav>
        <h1>Users CRUD</h1>
        <button onClick={handleClickShowModal}><i className='bx bx-cross'></i>Create new user</button>
    </nav>
  )

}

export default Navbar