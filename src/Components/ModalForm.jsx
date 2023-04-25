import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import "./styles/ModalForm.css"

const defaultValues = {
    first_name: "",
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
            <i onClick={ handleClickClose} className='modalForm__x bx bx-x'></i>
            <div className='modalForm__div'>
                <label className='modalForm__label' htmlFor="">First Name</label>
                <input className='modalForm__input' type="text" autoComplete='off' {...register("first_name")} />
            </div>
            <div className='modalForm__div'>
                <label className='modalForm__label' htmlFor="">Last Name</label>
                <input className='modalForm__input' type="text" autoComplete='off' {...register("last_name")} />
            </div>
            <div className='modalForm__div'>
                <label className='modalForm__label' htmlFor="">Email</label>
                <input className='modalForm__input' type="email" autoComplete='off' {...register("email")} />
            </div>
            <div className='modalForm__div'>
                <label className='modalForm__label' htmlFor="">Password</label>
                <input className='modalForm__input' type="password" autoComplete='off' {...register("password")} />
            </div>
            <div className='modalForm__div'>
                <label className='modalForm__label' htmlFor="">Birthday</label>
                <input className='modalForm__input' type="date" {...register("birthday")} />
            </div>
            <button className='modalForm__btn'>{updatingUser ? "Update new user" : "Add New User"}</button>
        </form>
    </section>
  )
}

export default ModalForm