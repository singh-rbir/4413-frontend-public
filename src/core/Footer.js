import React, {Fragment} from "react";
import {Link} from "react-router-dom";

/* 
<li className = "nav-item">
    <Link className="nav-link" style={isActive(history, "/user/home")} to="/user/home"> Home </Link>
</li>
const isActive = (history, path) => {
    if(history.location.pathname === path) {
        return {color: 'black'};
    } else {
        return {color: "white"};
    }
}; */

const Footer = () => {
    return (
    <footer class="pt-4 my-md-5 pt-md-5 border-top">
    <div class="row">
      <div class="col-12 col-md">
        <img class="mb-2" src="./Pricing example · Bootstrap_files/bootstrap-solid.svg" alt="" width="24" height="24" />
        <small class="d-block mb-3 text-muted">©Rushil, Aman, Rajbhir 4413</small>
      </div>
      <div class="col-6 col-md">
        <h5>Features</h5>
        <ul class="list-unstyled text-small">
          <li><a class="text-muted" href="https://getbootstrap.com/docs/4.5/examples/pricing/#">Cool stuff</a></li>
          <li><a class="text-muted" href="https://getbootstrap.com/docs/4.5/examples/pricing/#">Random feature</a></li>
          <li><a class="text-muted" href="https://getbootstrap.com/docs/4.5/examples/pricing/#">Team feature</a></li>
          <li><a class="text-muted" href="https://getbootstrap.com/docs/4.5/examples/pricing/#">Stuff for developers</a></li>
          <li><a class="text-muted" href="https://getbootstrap.com/docs/4.5/examples/pricing/#">Another one</a></li>
          <li><a class="text-muted" href="https://getbootstrap.com/docs/4.5/examples/pricing/#">Last time</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>Resources</h5>
        <ul class="list-unstyled text-small">
          <li><a class="text-muted" href="https://getbootstrap.com/docs/4.5/examples/pricing/#">Resource</a></li>
          <li><a class="text-muted" href="https://getbootstrap.com/docs/4.5/examples/pricing/#">Resource name</a></li>
          <li><a class="text-muted" href="https://getbootstrap.com/docs/4.5/examples/pricing/#">Another resource</a></li>
          <li><a class="text-muted" href="https://getbootstrap.com/docs/4.5/examples/pricing/#">Final resource</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>About</h5>
        <ul class="list-unstyled text-small">
          <li><a class="text-muted" href="https://getbootstrap.com/docs/4.5/examples/pricing/#">Team</a></li>
          <li><a class="text-muted" href="https://getbootstrap.com/docs/4.5/examples/pricing/#">Locations</a></li>
          <li><a class="text-muted" href="https://getbootstrap.com/docs/4.5/examples/pricing/#">Privacy</a></li>
          <li><a class="text-muted" href="https://getbootstrap.com/docs/4.5/examples/pricing/#">Terms</a></li>
        </ul>
      </div>
    </div>
    </footer>
);
};

export default Footer;