

export const ignoreEmptyComment =(store)=>(next)=>(action)=>{

    if ((action.type === 'posts/addNewComment' && action.payload.text.replaceAll(' ' , '' )) || action.type !== 'posts/addNewComment') {
        next(action)
    }
}




export const ignoreEmptyPostsUsers = (store) =>(next)=>(action)=>{
    if ((action.type === 'users/addPost' && action.payload.img.replaceAll(' ' , '' )) || action.type !== 'users/addPost') {
        next(action)
    }   
}





export const ignoreEmptyPostsPosts = (store) =>(next)=>(action)=>{
    if ((action.type === 'posts/addPost' && action.payload.img.replaceAll(' ' , '' )) || action.type !== 'posts/addPost') {
        next(action)
    }   
}