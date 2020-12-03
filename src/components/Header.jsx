import React from 'react';
import logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import * as userService from '../services/userService';
const currentuser = userService.getCurrentUser();

const logout = () => {
  userService.logout();
  window.location = '/';
};
const Header = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4  bg-white border-bottom shadow-sm header">
      <h2 className="my-0 mr-md-auto font-weight-normal logo">
        <NavLink
          activeClassName="is-active"
          to="/"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <img className="mb-4 col-20" src={logo} alt="logo" />
          Book<span>Store</span>
        </NavLink>
      </h2>
      <nav className="my-2 my-md-0 mr-md-3 header__list">
        <h5 className="mr-4">
          <NavLink
            exact={true}
            activeClassName="is-active"
            className="p-2 "
            to="/"
          >
            Home
          </NavLink>
        </h5>
        <h5 className="mr-4">
          <NavLink activeClassName="is-active" className="p-2" to="/shop">
            Shop
          </NavLink>
        </h5>
        {currentuser ? (
          <>
            <h5 className="mr-4">
              <NavLink
                activeClassName="is-active"
                className="p-2"
                to="/profile"
              >
                Profile
              </NavLink>
            </h5>
            <h5 className="mr-4" onClick={logout} style={{ cursor: 'pointer' }}>
              Logout
            </h5>
          </>
        ) : (
          <>
            <h5 className="mr-4">
              <NavLink activeClassName="is-active" className="p-2" to="/signin">
                SignIn
              </NavLink>
            </h5>
            <h5 className="mr-4">
              <NavLink activeClassName="is-active" className="p-2" to="/signup">
                SignUp
              </NavLink>
            </h5>
          </>
        )}

        <h5 className="mr-4">
          <NavLink activeClassName="is-active" className="p-2" to="/cart">
            <FiShoppingCart className="cart" />
          </NavLink>
        </h5>
      </nav>
    </div>
  );
};

export default Header;
