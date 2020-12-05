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
    return (
      <div className="checkout__container">
        <h1>Checkout</h1>
        <div className="form__container">
          <AddAddress
            currentUser={this.state.currentUser}
            address={this.props.address}
          />
          <Payment currentUser={this.state.currentUser} />
        </div>
      </div>
    );
  }
}

export default Checkout;
