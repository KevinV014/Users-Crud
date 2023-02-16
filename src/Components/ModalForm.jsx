import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import "./styles/ModalForm.css"

const defaultValues = {
    firs_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: "",
}

const ModalForm = ({isShowModal, handleClickShowModal, createrUser, updatingUser, updateUser, setUpdatingUser}) => 

 {const {register, handleSubmit, reset} = useForm()

    const submit = (data) => {
        if (updatingUser){
            updateUser(data, updatingUser.id)
        } else {
            createrUser(data)
        }
        reset(defaultValues)
    };

    const handleClickClose = () => {
        handleClickShowModal()
        reset(defaultValues)
        setUpdatingUser()
    }

    useEffect(() => {
      if (updatingUser) {
        reset(updatingUser)
      }
    }, [updatingUser])
    

  return (
    <section className={`modalForm ${isShowModal ? "active__form" : ""}`}>
        <form onSubmit={handleSubmit(submit)} className='modalForm__form'>
            <h3 className='modalForm__title'>{updatingUser ? "Edit user" : "New user"}</h3>
            <i onClick={handleClickClose} className='modalForm__x bx bx-x'></i>
            <div className='modalForm__div'>
                <label className='modalForm__label' htmlFor=""></label>
                <input className='modalForm__input' type="text" {...register("first_name")} />
            </div>
            <div className='modalForm__div'>
                <label className='modalForm__label' htmlFor=""></label>
                <input className='modalForm__input' type="text" {...register("last_name")} />
            </div>
            <div className='modalForm__div'>
                <label className='modalForm__label' htmlFor=""></label>
                <input className='modalForm__input' type="email" {...register("email")} />
            </div>
            <div className='modalForm__div'>
                <label className='modalForm__label' htmlFor=""></label>
                <input className='modalForm__input' type="password" {...register("password")} />
            </div>
            <div className='modalForm__div'>
                <label className='modalForm__label' htmlFor=""></label>
                <input className='modalForm__input' type="date" {...register("birthday")} />
            </div>
            <button className='modalForm'>{updatingUser ? "Update new user" : "Add New User"}</button>
        </form>
    </section>
  )
}

export default ModalForm