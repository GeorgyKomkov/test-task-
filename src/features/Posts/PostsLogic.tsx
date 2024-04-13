import { FC, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../shared/slice/store';
import { setLimit } from '../../shared/slice/apiOptions';


const PostsLogic: FC = () => {

    const scrollPosition = useSelector((state: RootState) => state.currentScrollPosition.scrollPosition);
    const dispatch = useDispatch();

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
  
    return null; 

}

export default PostsLogic