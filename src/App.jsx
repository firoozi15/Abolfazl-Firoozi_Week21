import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import NotFound from "./pages/404";
import Card from "./pages/Card";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<Navigate to="/"/>} />
          <Route path="/card" element={<Card />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
