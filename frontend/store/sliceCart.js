import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.data = [...state.data, action.payload];
        },
    },
});

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;