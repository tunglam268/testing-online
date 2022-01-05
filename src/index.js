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
import HeaderTitle from './routes/Header/header';


const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/listuser" element={<ListUser />} />
        <Route path="/question" element={<Question />} />
        <Route path="/header" element={<HeaderTitle />} />
        <Route path="/login" element={<Login />} />
      
    </Routes>
  </BrowserRouter>,
  rootElement
);