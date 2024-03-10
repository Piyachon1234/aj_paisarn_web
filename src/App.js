import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Keyframe from "./pages/keyframe";
import Login from "./pages/logIn";
import Home from "./pages/home"
import Cctv from "./pages/cctv";
import NavBar from "./Components/nav_bar";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="/keyframe/:slug" element={<Keyframe />} />
          <Route path="login" element={<Login />} />
          <Route path="/cctv/:slug" element={<Cctv />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
