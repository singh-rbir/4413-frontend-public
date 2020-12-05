import React, { Component } from 'react';
import * as orderService from '../services/orderService';
import * as userService from '../services/userService';
import Joi from 'joi';
import Form from './common/form';
import { ToastContainer, toast } from 'react-toastify';
import Payment from './Payment';
import AddAddress from './AddAddress';

class Checkout extends Component {
  state = {
    currentUser: {},
  };

  async componentDidMount() {
    const currentuser = JSON.parse(userService.getCurrentUser());
    this.setState({ currentUser: currentuser });
  }

  render() {
    const {
      zip,
      province,
      city,
      streetNo,
      streetName,
      phone,
      country,
    } = this.props.address;
    return (
      <div className="checkout__container">
        <h1>Checkout</h1>
        <div className="form__container">
          {this.props.address !== null ? (
            <>
              <div style={{ width: '100%', textAlign: 'center' }}>
                <h4>Your Address</h4>
                <p>Street No : {streetNo}</p>
                <p>Street Name :{streetName}</p>
                <p>City : {city}</p>
                <p>Province : {province}</p>
                <p>Country: {country}</p>
                <p>Zip : {zip}</p>
                <p>Phone: {phone}</p>
              </div>
            </>
          ) : (
            <AddAddress currentUser={this.state.currentUser} />
          )}

          <Payment currentUser={this.state.currentUser} />
        </div>
      </div>
    );
  }
}

export default Checkout;
