import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../shared/slice/store';
import { getPostById } from '../../shared/api/postsApi';
import Button from 'react-bootstrap/Button';

const SinglePost: FC = () => {
  
  const id = useSelector((state: RootState) => state.currentPostId.currentId);
  const { data: post, error, isLoading } = getPostById(id);
  
  const navigate = useNavigate();
  const handlerClickToBack = () => navigate('/');

  return (
    <div className="d-flex flex-column min-vh-100 align-items-center justify-content-center">
      <div className="container my-4 overflow-hidden rounded shadow">

        <div >
          {isLoading && <h1>Идет загрузка...</h1>}
          {error && <h1>Произошла ошибка...</h1>}
          {post && (
            <>
              <p className="fs-3">Post № {post.id}</p>
              <h1 className="display-4 text-center">{post.title}</h1>
              <p className="lead">{post.body}</p>
            </>
          )}
              <div className="d-flex justify-content-end"> 
          <Button onClick={handlerClickToBack} variant="primary">Назад</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export  { SinglePost };