import "./store.css";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const logout = () => {
    localStorage.clear()
    window.location.reload()
}
  return (
    <nav className="navbar store-header">
      <div>
        <Link to="/" onClick={() => {props.setCurrentLink("/");}} className="navbar-logo">
          <img
            className="sh-img"
            src="/assets/images/goods.jpg"
            alt=""
            style={{ width: "100%", height: "auto" }}
          />
        </Link>
      </div>
      <div className="navbar-search">
        <i className="fas fa-search search-icon"></i>
        <input
          type="text"
          className="i-text"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="navbar-cart">
        <div className="dropdown">
          <a class="dropbtn page-links">
            <Link to="/login">
            <i class="fa-solid fa-user nav-icon"></i>
            </Link>
          </a>
          <div className="dropdown-content">
            <a onClick={logout}>Log out</a>
          </div>
        </div>
        <a href="../Wishlist/wishilist.html" className="page-links">
          <i className="far fa-heart nav-icon"></i>
        </a>
        <Link to="/store/my-cart" className="page-links">
          <i className="fas fa-cart-plus nav-icon"></i>
        </Link>
      </div>
    </nav>
  );
}
