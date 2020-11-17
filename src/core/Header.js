import React, {Fragment} from "react";
import logo from '../images/logo.png';
import {Link} from "react-router-dom";

const Header = () => {
    return (<div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
  <h2 class="my-0 mr-md-auto font-weight-normal"><img className="mb-4 col-20" style={{borderRadius: "60%"}} src={logo} alt="" width="72" height="72" />Book<span style={{color: "red"}}>Store</span></h2>
  <nav class="my-2 my-md-0 mr-md-3">
    <h4 className="mr-5" style={{display: "inline-block"}}><a class="p-2 text-dark" href="https://getbootstrap.com/docs/4.5/examples/pricing/#">Home</a></h4>
    <h4 className="mr-5" style={{display: "inline-block"}}><a class="p-2 text-dark" href="https://getbootstrap.com/docs/4.5/examples/pricing/#">Shop</a></h4>
    <h4 className="mr-5" style={{display: "inline-block"}}><a class="p-2 text-dark" href="https://getbootstrap.com/docs/4.5/examples/pricing/#">Cart</a></h4>
    <h4 className="mr-5" style={{display: "inline-block"}}><a class="p-2 text-dark" href="https://getbootstrap.com/docs/4.5/examples/pricing/#">Profile</a></h4>
    <h4 className="mr-5" style={{display: "inline-block"}}><a class="p-2 text-dark" href="https://getbootstrap.com/docs/4.5/examples/pricing/#">Signin</a></h4>
    <h4 className="mr-5" style={{display: "inline-block"}}><a class="p-2 text-dark" href="https://getbootstrap.com/docs/4.5/examples/pricing/#">Sign up</a></h4>
  </nav>
</div>);
};

export default Header;