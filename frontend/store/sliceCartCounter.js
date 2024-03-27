import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0
}

const cartCounterSlice = createSlice({
    name: 'cartCounter',
    initialState,
    reducers: {
        setCartCounter: (state, action) => {
            const newState = action.payload
            state.value = state.value + newState; // Возвращаем новое значение счетчика, которое пришло в payload
        }
    }
});

export const { setCartCounter } = cartCounterSlice.actions;
export default cartCounterSlice.reducer;