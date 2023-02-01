import './MessengerChat.css'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
function MessengerChat() {
    const {currentUser : {messages}  } = useSelector(selectUsers)
    // console.log(currentUser);
  return (
	 <div className='MessengerChat'>
		{
			messages.map(mes => (
				<div key={mes.id} className='messengerDiv_2'> 
					<h3 className='user2'>{mes.question}</h3>
					<div className='botImgDiv'>
					  <img className='imgBot' src='https://static.botsrv2.com/website/img/quriobot_favicon.1727b193.png' alt="" />
					  <h3 className='bot2'>{mes.answer}</h3>
					</div>
				</div>
			))
		} 
	 </div>
  )
}

export default memo(MessengerChat)
