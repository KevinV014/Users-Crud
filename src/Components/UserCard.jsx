import React from 'react'

const UserCard = ({user, deleteUser, setUpdatingUser, handleClickShowModal}) => {

    const handleClickEdit = () => {
        setUpdatingUser(user)
        handleClickShowModal()
    }


  return (
    <article>
      <h3>{user.firts_name} {user.last_name} </h3>
      <hr />
      <ul>
        <li><span>Email</span> {user.email}</li>
        <li><span>BirthDay</span> <i className='bx bx-gift'></i>{user.birthday}</li>
        </ul>
        <hr />
        <footer>
          <button onClick={deleteUser(user.id)}><i className='bx bz-trash'></i></button>
          <button onClick={handleClickEdit}><i className='bx bx-pencil'></i></button>
        </footer>
    </article>
    )
}

export default UserCard