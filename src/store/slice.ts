import { createSlice } from '@reduxjs/toolkit'

interface iProduct {
  _id: string
  name: string
  image: string
  value: number
  note: number
}

export interface iProductState{
  products: [] | iProduct[]
  dropDown: boolean
}

const initialState: iProductState = {
  products: [],
  dropDown: false
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    change: (state) => {
      state.products = [{
        _id: "657867e52b2795b6b5018477",
        name: "Coqueteleira",
        image: "https://www.infoescola.com/wp-content/uploads/2007/10/erlenmeyer-450x450.jpg",
        value: 200,
        note: 9.5
      }]
    },
    setDropdown: (state) => {
      state.dropDown = !state.dropDown
    }
  }
})

export const { change, setDropdown } = productSlice.actions 
export default productSlice.reducer