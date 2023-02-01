import './MessengerChatForm.css'

import { memo, useRef } from 'react'
import IMAGES from '../../images'
import { useDispatch } from 'react-redux'
import { addNewmessage } from '../../store/slices/users/usersSlice'

function MessengerChatForm() {
    const dispatch = useDispatch()
    const formRef = useRef(null)
    const handleSubmit = (e)=>{
        e.preventDefault()
       const message =   formRef.current[0].value
        dispatch(addNewmessage(message))
       formRef.current.reset()
    }
  return (

     <form ref={formRef} onSubmit={handleSubmit}>
	     <div className='Chat-input'>
		    <input type='text' placeholder='Message...'/>
		    <img src={IMAGES.like} alt=''/>
	    </div>
     </form>
  )
}


export default memo(MessengerChatForm)




