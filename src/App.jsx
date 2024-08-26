import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import InvoicesPage from "./pages/InvoicesPage";
import CustomerPage from "./pages/CustomerPage";
import StatisticsPage from "./pages/StatisticsPage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import ProductPage from "./components/products/ProductPage";
import { useSelector } from "react-redux";

function App() {

  const cart = useSelector((state) => state.cart);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <RouteControl>
              <HomePage />
            </RouteControl>} />
          <Route path="/cart" element={<RouteControl><CartPage /></RouteControl>} />
          <Route path="/invoices" element={<RouteControl><InvoicesPage /></RouteControl>} />
          <Route path="/customers" element={<RouteControl><CustomerPage /></RouteControl>} />
          <Route path="/statistics" element={<RouteControl><StatisticsPage /></RouteControl>} />
          <Route path="/products" element={<RouteControl><ProductPage /></RouteControl>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


export const RouteControl = ({ children }) => {
  if (localStorage.getItem("posUser")) {
    return children
  } else {
    return <Navigate to="/login" />
  }
}