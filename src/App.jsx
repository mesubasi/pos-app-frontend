import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import InvoicesPage from "./pages/InvoicesPage";
import CustomerPage from "./pages/CustomerPage";
import StatisticsPage from "./pages/StatisticsPage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import ProductPage from "./components/products/ProductPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/invoices" element={<InvoicesPage />} />
          <Route path="/customers" element={<CustomerPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/products" element={<ProductPage />} />
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