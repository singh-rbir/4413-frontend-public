import React from 'react';
import logo from '../images/logo.png';
const Footer = () => {
  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top footer">
      <div className="row">
        <div className="col-6 col-md">
          <p>Features</p>
          <ul className="list-unstyled text-small text-muted">
            <li>Login/Logout/Register</li>
            <li>Browse Product</li>
            <li>Shopping Cart</li>
            <li>Search The Store</li>
            <li>Run Reports</li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <p>Resources</p>
          <ul className="list-unstyled text-small">
            <li>
              <a
                className="text-muted"
                href="https://github.com/rushilp2311/4413-Frontend"
              >
                Documentation
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <p>About</p>
          <ul className="list-unstyled text-small">
            <li>
              <a className="text-muted" href="/team">
                Team
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-12 col-md credits">
        <img className="mb-2" src={logo} alt="" width="24" height="24" />
        <small className="d-block mb-3 text-muted">
          © Rushil, Aman, Rajanbir 4413
        </small>
      </div>
    </footer>
  );
};

export default Footer;
