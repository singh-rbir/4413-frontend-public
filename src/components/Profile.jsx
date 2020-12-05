import React, { useState } from "react";
import {getCurrentUser} from "../services/userService";
import {generateReport, getTopSold} from "../services/adminService";
import ReactHtmlParser from 'react-html-parser';

function Profile() {
  let [x, setx] = useState("");
  let [y, sety] = useState("");

  const user = JSON.parse(getCurrentUser());
  if(user.userType) {
    getTopSold(user.userId).then(data => setx(data.data));
    generateReport(user.userId).then(data => sety(data.data));
  }
  return (
    <div>
    <div className="card mb-5">
      <h3 className="card-header">User Information</h3>
      <ul className="list-group">
          <li className="list-group-item">First Name:  {user.firstName}</li>
          <li className="list-group-item">Last Name:  {user.lastName}</li>
          <li className="list-group-item">Email: {user.email}</li>
          <li className="list-group-item">Role:  {user.userType ? "Admin" : "Registered User"}</li>
      </ul>
    </div>
    {user.userType ? 
    <div className="mb-5 ml-3">
      <div><h1>Best Seller Books</h1><br/>{ReactHtmlParser(x)}</div><br/><br/>
      <div><h1>Generated Report</h1><br/>{ReactHtmlParser(y)}</div>
    </div> : null}
    </div>
  );
}

export default Profile;
