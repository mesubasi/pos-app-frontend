//Header.jsx

import {
  SearchOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  UserOutlined,
  BarChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Badge, Input, message } from "antd";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./index.css";

const Header = ({ setSearch }) => {
  const cart = useSelector((state) => state.cart);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const logOut = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_SERVER_URL + "/api/auth/logout", {
        method: "POST",
        credentials: "include", // If your server uses cookies, include credentials
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        localStorage.removeItem("posUser");
        navigate("/login");
        message.success("Logout Successful");
      } else {
        throw new Error("Logout failed");
      }
    } catch (error) {
      message.error("Logout failed: " + error.message);
      console.error("Logout error:", error);
    }
  };


  return (
    <div className="border-b mb-6">
      <header className="header py-4 px-6 flex justify-between items-center gap-10">
        <div className="logo">
          <Link to="/">
            <h2 className="text-2xl font-bold md:text-4xl">LOGO</h2>
          </Link>
        </div>
        <div className="header-search flex-1 flex justify-center"
          onClick={() => {
            pathname !== "/" && navigate("/")
          }}>
          <Input
            size="large"
            placeholder="Product Search"
            prefix={<SearchOutlined />}
            className="rounded-full max-w-[800px]"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
        </div>
        <div className="menu-links">
          <Link to="/" className={`menu-link ${pathname === "/" && "active"
            }`}>
            <HomeOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Home</span>
          </Link>
          <Badge count={cart.cartItems.length} offset={[0, 0]} className="md:flex hidden">
            <Link to="/cart" className={`menu-link ${pathname === "/cart" && "active"
              }`}>
              <ShoppingCartOutlined className="text-2xl" />
              <span className="md:text-xs text-[10px]">Cart</span>
            </Link>
          </Badge>
          <Link to={"/invoices"} className={`menu-link ${pathname === "/invoices" && "active"
            }`}>
            <CopyOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Invoices</span>
          </Link>
          <Link to={"/customers"} className={`menu-link ${pathname === "/customers" && "active"
            }`}>
            <UserOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Customers</span>
          </Link>
          <Link to={"/statistics"} className={`menu-link ${pathname === "/statistics" && "active"
            }`}>
            <BarChartOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Statistics</span>
          </Link>
          <div onClick={logOut}>
            <Link className={`menu-link`} >
              <LogoutOutlined className="md:text-2xl text-xl" />
              <span className="md:text-xs text-[10px]">Exit</span>
            </Link>
          </div>
        </div>
        <Badge count={cart.cartItems.length} offset={[0, 0]} className="md:hidden flex">
          <Link to="/cart" className={`menu-link ${pathname === "/cart" && "active"
            }`}>
            <ShoppingCartOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Cart</span>
          </Link>
        </Badge>
      </header >
    </div >
  );
};

export default Header;
