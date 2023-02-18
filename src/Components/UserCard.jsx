import React from 'react'
import "./styles/UserCard.css"

const UserCard = ({user, deleteUser, setUpdatingUser, handleClickShowModal}) => {

    const handleClickEdit = () => {
        setUpdatingUser(user)
        handleClickShowModal()
    }


  return (
    <article className='articleForm'>
      <h3 className='articleForm__title'>{user.first_name} {user.last_name} </h3>
      <hr className='articleForm__hr' />
      <ul>
        <li className='articleForm__li'><span className='articleForm__email'>Email</span> {user.email}</li>
        <li className='articleForm__li'><span className='articleForm__birthday'>BirthDay</span>
        <div>
         <i className='articleForm__iBirthday bx bx-gift'></i>
         <span>{user.birthday}</span></div></li>
        </ul>
        <hr className='articleForm__hr' />
        <footer className='articleForm__footer'>
          <button className='articleForm__btnTrash'  onClick={() => deleteUser(user.id)}><i className='articleForm__iTrash bx bx-trash'></i></button>
          <button className='articleForm__btnPencil' onClick={handleClickEdit}><i className='articleForm__iPencil bx bx-pencil'></i></button>
          </footer>
    </article>
    )
}

export default UserCard