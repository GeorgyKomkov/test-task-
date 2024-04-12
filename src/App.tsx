
import PostConteiner from './features/Posts/pagesComponents/PostConteinerPage';
import SinglePost from './features/Posts/pagesComponents/SinglePostPage'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <PostConteiner/>}/>
      <Route path='/post' element={ <SinglePost/>}/>
    </Routes>
      
    </BrowserRouter>

  );
}

export default App;
