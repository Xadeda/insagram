import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchUsers } from '../../store/slices/users/usersAPI';
import { selectUsers, toggleCurrentUser } from '../../store/slices/users/usersSlice';
import './Login.css'

function Login() {
const dispatch = useDispatch()
const navigate = useNavigate()
const { currentUser, data: users } = useSelector(selectUsers)
useEffect(() => {
  if (currentUser) {
      navigate('/')
  }
},[currentUser])

useEffect(()  =>{
  if (!users.length) {
      dispatch(fetchUsers())
      
    }
}, [])
const formRef = useRef(null)

const handeSubmit =(e)=>{
  e.preventDefault() 
  dispatch(toggleCurrentUser({
    login :formRef.current[0].value,
    password : formRef.current[1].value,
  }))
}

  return (
    <div className='loginDiv'>
      <div className='loginImg'></div>
      <form ref={formRef} onSubmit={handeSubmit} className='formDiv'>
        <div className='formDivOne'>
           <h1>Instagram</h1>
           <input defaultValue={'bret'} type="text" placeholder='Enter your email...'/>
           <input defaultValue={'gwenborough'} type="password" name="password" placeholder='Enter your password...' />
           <button>Sign In</button>
           <p className='or'>OR</p>
           <h3>Login to Facebook</h3> <br />
           <h5>Forgot your password?</h5>
        </div>
        <div className='formDivTwo'>
            <p>Don't have an account yet? 
              <span>
                <Link className='link' to='/'>Sign up</Link>
              </span></p> 
        </div> 
      </form>
    </div>
  )
}

export default Login