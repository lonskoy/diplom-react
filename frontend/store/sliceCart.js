import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.data.push(action.payload)
        },
        minusCart: (state, action) => {
            state.data = action.payload
        }
    },
});

export const { setCart, minusCart } = cartSlice.actions;
export default cartSlice.reducer;