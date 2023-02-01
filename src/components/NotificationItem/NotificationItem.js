import './NotificationItem.css'
import { memo } from 'react'

function NotificationItem({img,name}) {
  return (
	 <div className='NotificationItem'>
		<div className='NotificationItem-body'>
			<div className="status-card">
				<div className="profile-pic"><img src={img} alt=""/></div>
			</div>
			<div>
				<span>{name}</span><span>__started following you. 2d</span>
			</div>
		</div>
		
		<div className='NotificationItembtn'>
			Follow
		</div>
	 </div>
  )
}

export default memo(NotificationItem)