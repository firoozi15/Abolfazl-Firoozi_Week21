import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import NotFound from "./pages/404";
import Card from "./pages/Card";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/products" element={<Navigate to="/" />} />
            <Route path="/card" element={<Card />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
