import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { selectPosts } from '../../store/slices/posts/postsSlices'
import { selectUsers } from '../../store/slices/users/usersSlice'

function Comments({username, text}) {
  const {currentUser} = useSelector(selectUsers)

  const data = useSelector(selectPosts)
  // console.log(data);
  return (
    <p className="description"><span>{currentUser.username} </span> {text}</p>
  )
}

export default memo(Comments)