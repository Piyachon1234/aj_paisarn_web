import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./pages/layout";
import Keyframe from "./pages/keyframe";
import Login from "./pages/logIn";
import Home from "./pages/home"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="keyframe" element={<Keyframe />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
