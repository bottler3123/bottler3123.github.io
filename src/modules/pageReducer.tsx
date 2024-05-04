import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PageState {
  pageState : String;
}

const initialState: PageState = {
    pageState : "main",
}

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    movePage: (state , action: PayloadAction<String>) => {
      state.pageState = action.payload;
    }
  }
})

export const { movePage } = pageSlice.actions;

export default pageSlice.reducer;