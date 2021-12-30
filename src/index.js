import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Login from "./routes/login";
import Home from "./routes/home";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);