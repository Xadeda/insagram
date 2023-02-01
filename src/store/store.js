

import { combineReducers, configureStore , getDefaultMiddleware } from "@reduxjs/toolkit";
import { ignoreEmptyComment, ignoreEmptyPostsPosts, ignoreEmptyPostsUsers } from "./middleware/posts";
import { postsReducer } from "./slices/posts/postsSlices";
import { searchTxtReducer } from "./slices/searchTxt/searchTxtSlice";
import { usersReduser } from "./slices/users/usersSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const rootReducer = combineReducers({
  posts : postsReducer,
  users : usersReduser,
  searchTxt: searchTxtReducer,
})

const persistConfig = {
  key: 'insta0107',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer: persistedReducer,
    middleware:(getDefaultMiddleware) =>(
        [...getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }), ignoreEmptyComment , ignoreEmptyPostsPosts,ignoreEmptyPostsUsers]
    )
}) 


export const persistor = persistStore(store)

export default store