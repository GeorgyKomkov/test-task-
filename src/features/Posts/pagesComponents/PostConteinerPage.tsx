import React, { FC, useEffect} from 'react';
import { getPosts } from '../services/postsApi';
import PostItem from './PostItem';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../slice/store';
import { setLimit } from '../slice/apiOptions';
import LoadingSpinner from '../../../ui/Spiner';



const PostContainer: FC = () => {
  const scrollPosition = useSelector((state: RootState) => state.currentScrollPosition.scrollPosition);
  const limit = useSelector((state: RootState) => state.apiOptions.limit);
  const dispatch = useDispatch();
  const { data: posts, error, isLoading } = getPosts(limit);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight
    ) {
      dispatch(setLimit())
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.scrollTo(0, scrollPosition); 
  }, [scrollPosition]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container my-4 overflow-hidden rounded shadow">
        <div>
          {isLoading && <LoadingSpinner/>}
          {error && <h1>EEERRROOOORR</h1>}
          {posts && posts.map((post) => <PostItem key={post.id} post={post} />)}
        </div>
      </div>
    </div>
  );
};

export default PostContainer;