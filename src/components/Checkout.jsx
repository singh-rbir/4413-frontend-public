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
    checkoutItems: {},
    currentUser: {},
  };

  async componentDidMount() {
    const currentuser = JSON.parse(userService.getCurrentUser());
    this.setState({ currentUser: currentuser });
    const result = await orderService.getCart({ userId: currentuser.userId });
    this.setState({ checkoutItems: result.data });
  }

  render() {
    return (
      <div className="checkout__container">
        <div className="checkout__total">
          <p style={{ fontSize: '25px', textAlign: 'center' }}>
            Your Total is : {this.state.checkoutItems.cartTotal}
          </p>
        </div>
        <div className="form__container">
          <AddAddress currentUser={this.state.currentUser} />
          <Payment currentUser={this.state.currentUser} />
        </div>
      </div>
    );
  }
}

export default Checkout;
