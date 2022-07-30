import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { createBrowserHistory } from "history";
import { ToastContainer } from "react-toastify";
import RouterMain from "./router";

export const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter>
      <Routes history={history}>
        /* <Route path="/" element={<Home />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/checkout/:id" element={<Checkout />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
