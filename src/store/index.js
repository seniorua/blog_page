import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/articles'
import counterReducer2 from './slices/addDel'

export const store = configureStore({
  reducer: {
    articlesStore: counterReducer,
    counter: counterReducer2,
  },
})