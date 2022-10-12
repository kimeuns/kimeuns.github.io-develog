// state 저장소

import { configureStore, createSlice } from '@reduxjs/toolkit'
import post from './postSlice'

export default configureStore({
  reducer: {
    post : post.reducer
  }
}) 
