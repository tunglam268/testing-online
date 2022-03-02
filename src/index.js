import ReactDOM from 'react-dom';
import App from './App';
import Example from './pages/Example/example';
import reportWebVitals from './reportWebVitals';
import store from './store'
import { Provider } from 'react-redux'


const rootElement = document.getElementById("root");
ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>

  ,
  rootElement
);

reportWebVitals();