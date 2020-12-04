import React from 'react';
import Joi from 'joi';
import Form from './common/form';
import * as orderService from '../services/orderService';
import { ToastContainer, toast } from 'react-toastify';
class Payment extends Form {
  state = {
    data: { name: '', number: '', expiry: '', cvv: '' },
    errors: {},
  };

  schema = {
    name: Joi.string(),
    number: Joi.number(),
    expiry: Joi.string(),
    cvv: Joi.number(),
  };

  doSubmit = async () => {
    try {
      const { name, number, expiry, cvv } = this.state.data;
      let order = {
        userId: this.props.currentUser.userId,
        name: name,
        number: number,
        expiry: expiry,
        cvv: cvv,
      };
      const result = await orderService.confirmOrder(order);
      console.log(result);
      if (result.data.status === 0) {
        toast.success(`Order Successful`, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        localStorage.removeItem('cart');
        setTimeout(() => (window.location = '/'), 1000);
      } else {
        toast.error(`${result.data.message}`, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div className="signup__form">
        <form onSubmit={this.handleSubmit}>
          <div className="form__body">
            <p>Enter you Payment Details</p>
            {this.renderInput('name', 'Enter your Name')}
            {this.renderInput('number', 'Enter your Card Number')}
            {this.renderInput('expiry', 'Enter your expiry')}
            {this.renderInput('cvv', 'Enter your cvv')}
            {this.renderButton('Confirm Payment')}
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              className="notification"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Payment;
