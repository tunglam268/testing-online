import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
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
import Tutorial from './pages/Tutorial/tutorial';
import Result from './pages/Result/result';
import Complete from './pages/Complete/complete';
import ManageAccounnt from './pages/ManageAccount/manage';
import Example from './pages/Example/example';



export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/example" element={<Example />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/listuser" element={<ListUser />} />
        <Route path="/question" element={<Question />} />
        <Route path="/login" element={<Login />} />
        <Route path="/document" element={<Document />} />
        <Route path="/test" element={<Test />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/result" element={<Result/>} />
        <Route path="/complete" element={<Complete/>} />
        <Route path="/manageaccount" element={<ManageAccounnt/>} />
    </Routes>
  </BrowserRouter>
  
  );
}