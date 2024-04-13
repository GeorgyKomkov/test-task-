import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollPositionState } from '../types/types'


const initialState: ScrollPositionState = {
  scrollPosition: 0,
};

const scrollPositionSlice = createSlice({
  name: 'scroll position slice',
  initialState,
  reducers: {
    setScrollPosition: (state, action: PayloadAction<number>) => {
      state.scrollPosition = action.payload;
    },
  },
});

export const { setScrollPosition } = scrollPositionSlice.actions;
export default scrollPositionSlice.reducer;