import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ModalForm from './Components/ModalForm'
import Navbar from './Components/Navbar'
import {UserList} from './Components/UserList'

const BASE_URL = "https://users-crud.academlo.tech/"

function App() {

  const [users, setUsers] = useState([])
  const [isShowModal, setIsShowModal] = useState(false)
  const [updatingUser, setUpdatingUser] = useState()

  const handleClickShowModal = () => {
    setIsShowModal((isShowModal) => !isShowModal)
}

  const createrUser = (data) => {
    axios.post(`${BASE_URL}users/`, data)
    .then(() => getAllUsers())
    .catch((err) => console.log(err.data))
  }

  const getAllUsers = () => {
    axios.get(`${BASE_URL}users/`)
    .then((res) => setUsers(res.data))
    .catch((err) => console.log(err.data))
  }

  const deleteUser = (id) => {
    axios
    .delete(`${BASE_URL}users/${id}/`)
    .then(() => getAllUsers())
    .catch((err) => console.log(err))
  }

  const updateUser = (data, id) => {
    axios.patch(`${BASE_URL}users/${id}/`, data)
    .then(() => {
      getAllUsers()
      handleClickShowModal()
    })
    .catch((err) =>console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <div className="App">
      <Navbar handleClickShowModal={handleClickShowModal} />
      <ModalForm handleClickShowModal={handleClickShowModal} isShowModal={isShowModal} createrUser={createrUser} 
      updatingUser={updatingUser}
      updateUser={updateUser}
      setUpdatingUser={setUpdatingUser}
      />
      <UserList users={users} deleteUser={deleteUser} setUpdatingUser={setUpdatingUser} handleClickShowModal={handleClickShowModal}/>
    </div>
  )
}

export default App
