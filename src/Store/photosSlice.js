import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPhotos = createAsyncThunk(
  'photos/fetchPhotos',
  async function getAllPhotos() {
    const response = await axios.get(
      'https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043',
    )
    return response.data
  },
)

const initialState = {
  allPhotos: [],
  status: null,
  error: null,
}

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    getPhotos: (state, action) => (state.allPhotos = action.payload),
  },
  extraReducers: {
    [fetchPhotos.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [fetchPhotos.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.allPhotos = action.payload
      state.error = null
    },
    [fetchPhotos.rejected]: (state) => {
      state.error = 'error'
    },
  },
})

export const { getPhotos } = photosSlice.actions

export default photosSlice.reducer
