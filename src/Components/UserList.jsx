import React from 'react'
import UserCard from './UserCard'

export const UserList = ({users, deleteUser, setUpdatingUser, handleClickShowModal}) => {
  return (
    <section className='sectionForm'>
      {
        users.map(user => <UserCard 
          key={user.id} 
          user={user} 
          deleteUser={deleteUser} 
          setUpdatingUser={setUpdatingUser} 
          handleClickShowModal ={handleClickShowModal}/>)
      }
    </section>
  )
}
