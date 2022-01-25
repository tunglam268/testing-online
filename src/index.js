import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import ListUser from './pages/ListUser/listuser';
import Question from './pages/Question/question';
import Login from './pages/LoginPage/login';
import Home from './pages/Home/home';
import Document from './pages/Documents/document';
import Test from './pages/Test/test';



const rootElement = document.getElementById("root");
ReactDOM.render(
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/listuser" element={<ListUser />} />
        <Route path="/question" element={<Question />} />
        <Route path="/login" element={<Login />} />
        <Route path="/document" element={<Document />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>,
  rootElement
);