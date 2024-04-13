import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from '../api/postsApi'; 
import  currentPostSlice from './currentPost'
import scrollPositionReducer from './scroll'
import apiOptionsReducer from './apiOptions';


const store = configureStore({
    reducer: {
      currentPostId: currentPostSlice,
      currentScrollPosition: scrollPositionReducer,
      apiOptions: apiOptionsReducer,
        [postsApi.reducerPath]: postsApi.reducer,
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware),
    });
    
export type RootState = ReturnType<typeof store.getState>;

export default store;
