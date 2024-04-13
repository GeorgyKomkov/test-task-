import { FC} from 'react';
import { getPosts } from '../../shared/api/postsApi';
import PostItem from '../../features/Posts/PostItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../shared/slice/store';

import {LoadingSpinner} from '../../shared/ui/Spiner';
import PostsLogic from '../../features/Posts/PostsLogic';



const PostContainer: FC = () => {

  const limit = useSelector((state: RootState) => state.apiOptions.limit);
  const { data: posts, error, isLoading } = getPosts(limit);

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container my-4 overflow-hidden rounded shadow">
        <div>
          <PostsLogic/>
          {isLoading && <LoadingSpinner/>}
          {error && <h1>Произошла Ошибка Обновите страницу</h1>}
          {posts && posts.map((post) => <PostItem key={post.id} post={post} />)}
        </div>
      </div>
    </div>
  );
};

export { PostContainer };