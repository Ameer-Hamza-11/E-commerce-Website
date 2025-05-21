import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const existing = state.find(item => item.id === action.payload.id)
            if (!existing) {
                state.push(action.payload)
            }
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item.id !== action.payload)
        }

    }
})

export default cartSlice.reducer
export const { addToCart, removeFromCart } = cartSlice.actions