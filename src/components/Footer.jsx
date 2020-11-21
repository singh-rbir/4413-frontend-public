import React from 'react';
import logo from '../images/logo.png';
const Footer = () => {
  return (
    <footer class="pt-4 my-md-5 pt-md-5 border-top footer">
      <div class="row">
        <div class="col-6 col-md">
          <p>Features</p>
          <ul class="list-unstyled text-small text-muted">
            <li>Login/Logout/Register</li>
            <li>Browse Product</li>
            <li>Shopping Cart</li>
            <li>Search The Store</li>
            <li>Run Reports</li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <p>Resources</p>
          <ul class="list-unstyled text-small">
            <li>
              <a
                class="text-muted"
                href="https://github.com/rushilp2311/4413-Frontend"
              >
                Documentation
              </a>
            </li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <p>About</p>
          <ul class="list-unstyled text-small">
            <li>
              <a class="text-muted" href="/team">
                Team
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-12 col-md credits">
        <img class="mb-2" src={logo} alt="" width="24" height="24" />
        <small class="d-block mb-3 text-muted">
          ©Rushil, Aman, Rajbhir 4413
        </small>
      </div>
    </footer>
  );
};

export default Footer;
