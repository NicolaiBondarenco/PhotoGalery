import { configureStore } from '@reduxjs/toolkit'
import photos from './photosSlice'

export const store = configureStore({
  reducer: {
    photos,
  },
})
