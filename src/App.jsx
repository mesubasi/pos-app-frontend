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
import { useEffect, useState } from "react";

function App() {

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])


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
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("posUser")));

  const isTokenExpired = (token) => {
    if (!token) return true;

    const payloadBase64 = token.split('.')[1];
    const decodedPayload = JSON.parse(atob(payloadBase64));

    const expirationDate = decodedPayload.exp * 1000;
    return Date.now() > expirationDate;
  };

  const refreshToken = async () => {
    try {
      const res = await fetch(process.env.REACT_APP_SERVER_URL + "/api/auth/refresh", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = await res.json();
      if (res.ok) {
        const updatedUser = { ...user, accessToken: data.accessToken };
        localStorage.setItem("posUser", JSON.stringify(updatedUser));
        setUser(updatedUser);
        return true;
      } else {
        localStorage.removeItem("posUser");
        return false;
      }
    } catch (error) {
      console.error("Token refresh error:", error);
      localStorage.removeItem("posUser");
      return false;
    }
  };

  useEffect(() => {
    const checkAndRefreshToken = async () => {
      if (user && isTokenExpired(user.accessToken)) {
        await refreshToken();
      }
    };


    const intervalId = setInterval(() => {
      checkAndRefreshToken();
    }, 5 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, [user]);

  if (!user || isTokenExpired(user.accessToken)) {
    return <Navigate to="/login" />;
  }

  return children;
};
