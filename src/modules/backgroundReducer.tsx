import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface backgroundState {
    number : number;
};

const initialState: backgroundState = {
    number : 0,
};

export const backgoundSlice = createSlice({
    name: 'background',
    initialState,
    reducers: {
        increase: (state, action: PayloadAction<number>) => {
            state.number += action.payload
        }
    }

});

export default backgoundSlice.reducer;