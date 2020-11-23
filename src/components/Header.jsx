import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
const Header = () => {
  return (
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm header">
      <h2 class="my-0 mr-md-auto font-weight-normal logo">
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <img className="mb-4 col-20" src={logo} alt="logo" />
          Book<span>Store</span>
        </Link>
      </h2>
      <nav class="my-2 my-md-0 mr-md-3 header__list">
        <h5 className="mr-4">
          <Link className="p-2 text-dark" to="/">
            Home
          </Link>
        </h5>
        <h5 className="mr-4">
          <Link className="p-2 text-dark" to="/shop">
            Shop
          </Link>
        </h5>

        <h5 className="mr-4">
          <Link className="p-2 text-dark" to="/profile">
            Profile
          </Link>
        </h5>
        <h5 className="mr-4">
          <Link className="p-2 text-dark" to="/signin">
            Sign-in
          </Link>
        </h5>
        <h5 className="mr-4">
          <Link className="p-2 text-dark" to="/signup">
            Sign-up
          </Link>
        </h5>
        <h5 className="mr-4">
          <Link className="p-2 text-dark" to="/cart">
            <FiShoppingCart className="cart" />
          </Link>
        </h5>
      </nav>
    </div>
  );
};

export default Header;
