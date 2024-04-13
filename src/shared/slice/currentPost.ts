
import { createSlice } from '@reduxjs/toolkit';
import { CurrentPost } from '../types/types';

const initialState : CurrentPost = {
  currentId: 1,
};

const currentPostSlice = createSlice({
  name: 'current post slice',
  initialState,
  reducers: {
    setCurrentId: (state, { payload }) => {
        state.currentId = payload.id
    },
  },
});

export const { setCurrentId } = currentPostSlice.actions;
export default currentPostSlice.reducer;
