import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from '../../types/types';

export const postsApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], number>({
      query: (limit: number) => ({
        url: '/posts',
        params: {
          _limit: limit,
        }
      }),
    }),
    getPostById: builder.query<IPost, number>({
      query: (postId: number) => ({
        url: `/posts/${postId}`,
      }),
    }),
  }),
});

const { useGetPostsQuery, useGetPostByIdQuery } = postsApi;

export {
  useGetPostsQuery as getPosts,
  useGetPostByIdQuery as getPostById,
};