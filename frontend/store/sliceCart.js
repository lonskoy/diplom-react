import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, action) => {
            return [...state.data, action.payload];
        },
    },
});

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;