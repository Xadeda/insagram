import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./postsAPI";


const postsSlice = createSlice({
    name : 'posts',
    initialState : {
        posts : [],
        isLoading : false,
        error : ''
    },
        reducers: {
        addNewComment(state, {payload}){
            const idx = state.posts.findIndex(post => post.id === payload.id)
            state.posts[idx].comments.push({
                id: new Date().getTime().toString(),
                userName: payload.userName,
                text : payload.text
            })  
        },
        addPost(state, {payload}){
            state.posts.unshift({...payload})
        },
        delPost(state , { payload}){

            return {
                ...state,
                posts : [
                    ...state.posts.filter(post => post.id !== payload)

                ]
            }
        }
    },
    extraReducers: {
        [fetchPosts.pending] : (state, { payload}) =>{
            state.isLoading = true
            
        },
        [fetchPosts.fulfilled] : (state, { payload}) => {
           state.posts = payload
            state.isLoading = false
            state.error =  ''

            
        },
        [fetchPosts.rejected] : (state, {action}) => {
            state.posts = []
            state.isLoading = false
            state.error = action.error.message
        }
    },

})
// export const isLoading = postsSlice;
export const selectPosts = state => state.posts;
export const {addNewComment, addPost, delPost} = postsSlice.actions;
export const postsReducer = postsSlice.reducer; 