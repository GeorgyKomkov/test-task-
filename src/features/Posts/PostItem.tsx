import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostItemsProps } from '../../shared/types/types';
import { useDispatch } from 'react-redux';
import { setCurrentId } from '../../shared/slice/currentPost';
import { setScrollPosition } from '../../shared/slice/scroll';
import Button from 'react-bootstrap/Button';

const PostItem: FC<PostItemsProps> = ({ post }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlerClick = () => {
        const scrollPosition = window.scrollY;
        dispatch(setCurrentId({ id: post.id }));
        dispatch(setScrollPosition(scrollPosition))
        navigate('/post');
    };

    return (
      <div className="card mb-3">
      <div className="card-body">
          <div>
              <p className="font-weight-bold mb-2 text-muted ">Post № {post.id}</p>
              <h5 className="card-title text-center">{post.title}</h5>
              <p className="card-text text-truncate">{post.body}</p>
          </div>
          <div className="d-flex justify-content-end"> 
              <Button variant="primary" onClick={handlerClick}>Просмотр</Button>
          </div>
      </div>
  </div>
    );
};

export default PostItem;