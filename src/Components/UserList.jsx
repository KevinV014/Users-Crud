import React from 'react'
import UserCard from './UserCard'

export const UserList = ({users, deleteUser, setUpdatingUser, handleClickShowModal}) => {
  return (
    <section>
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
