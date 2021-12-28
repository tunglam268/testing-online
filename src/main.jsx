import { render } from "react-dom";
import 'antd/dist/antd.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Login from "./routes/login";
import Invoices from "./routes/gotest";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="home" element={<Invoices />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);