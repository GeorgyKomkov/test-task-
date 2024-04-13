
import { PostContainer } from '../pages/Posts/PostConteinerPage';
import {SinglePost} from '../pages/Posts/SinglePostPage'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <PostContainer/>}/>
      <Route path='/post' element={ <SinglePost/>}/>
    </Routes> 
    </BrowserRouter>

  );
}

export default App;
