import React, { memo, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../store/slices/posts/postsAPI'
import {  selectPosts } from '../../store/slices/posts/postsSlices'
import { resetSearchTxt, selectSearchTxt } from '../../store/slices/searchTxt/searchTxtSlice'
import Loading from '../Loading/Loading'
import Post from '../Post/Post'

function Posts() {
    const dispatsh = useDispatch()
    const searchTxt = useSelector(selectSearchTxt)
    const {posts, isLoading,error} = useSelector(selectPosts)
    useEffect(() => {
        if (!posts.length) {
          dispatsh(fetchPosts())
          // console.log(posts);
        }
    }, [] )

    useEffect(() =>{
      return ()=>{
        dispatsh(resetSearchTxt())
      }
    }, [])

    const filteredPosts = useMemo(() =>{
        return posts.filter(post =>post.name.includes(searchTxt.toLowerCase()))

    }, [posts, searchTxt])

  return (
    <>
    {
      isLoading && <Loading/>
    }
    {
      !isLoading && error ? <h1>Error</h1> : null
    }
    {
      !isLoading && posts.length ? filteredPosts.map(el => <Post key={el.id} id={el.id} img={el.img} name={el.name} likesCount={el.likesCount} postText={el.postText} timeAgo={el.timeAgo} 
        comments={el.comments}
      />) : null
    }
    </>
  )
}


export default memo(Posts , (prev, next) => JSON.stringify(prev) === JSON.stringify(next))
