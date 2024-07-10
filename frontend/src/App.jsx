import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Delivery from "./delivery";
import Updateform from "./updateform";

const RiderApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route path="/delivery" element={<Delivery />}></Route>
        <Route path="/updateform/:id" element={<Updateform />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RiderApp;
