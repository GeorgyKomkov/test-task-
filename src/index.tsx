
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { Provider } from 'react-redux';
import store from './shared/slice/store';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
