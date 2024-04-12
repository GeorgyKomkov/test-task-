/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';
import { ApiOptions } from '../../types/types';

const initialState : ApiOptions = {
  limit: 10,
};

const currentPostSlice = createSlice({
  name: 'currentPost',
  initialState,
  reducers: {
    setLimit: (state) => {
      state.limit = state.limit + 5;
    },
  },
});

export const { setLimit } = currentPostSlice.actions;
export default currentPostSlice.reducer;