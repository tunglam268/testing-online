import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import ListUser from './routes/ListUser/listuser';
import Question from './routes/Question/question';
import Login from './routes/LoginPage/login';
import Home from './routes/Home/home';


const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="listuser" element={<ListUser />} />
        <Route path="question" element={<Question />} />
        <Route path="login" element={<Login />} />
        
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);