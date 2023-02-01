import './MessengerPeoplesMessages.css'
import IMAGES from '../../images'
import MessengerPeoplesMessage from '../MessengerPeoplesMessage/MessengerPeoplesMessage'

function MessengerPeoplesMessages() {
	const message = [
		{
			 id: '1',
			 img: 'https://static.botsrv2.com/website/img/quriobot_favicon.1727b193.png',
			 name: 'Boto',
			 active: 'Active'
		},
		
  ]
  return (
	 <div className='Messenger-left-col-peoples-messages'>
		{
			message.map(el => <MessengerPeoplesMessage key={el.id} img={el.img} name={el.name} active={el.active}/>)
		}
	 </div>
  )
}

export default MessengerPeoplesMessages
