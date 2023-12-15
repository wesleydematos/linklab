import { createSlice } from '@reduxjs/toolkit'

export interface iProductState{
  dropDown: boolean
}

const initialState: iProductState = {
  dropDown: false
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setDropdown: (state) => {
      state.dropDown = !state.dropDown
    }
  }
})

export const { setDropdown } = productSlice.actions 
export default productSlice.reducer