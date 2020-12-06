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
        toast.success(`Order successfully completed!`, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        localStorage.removeItem('cart');
        setTimeout(() => (window.location = '/shop'), 1000);
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
            {this.renderInput('name', 'Name', 'Your Full Name')}
            {this.renderInput(
              'number',
              'Card Number',
              'Your credit card number'
            )}
            {this.renderInput('expiry', 'Expiry', 'MM/YY')}
            {this.renderInput('cvv', 'CVV', 'Enter your CVV (3 digits)')}
            {this.renderButton('Confirm Payment')}
          </div>
          {/* <ToastContainer
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
          /> */}
        </form>
      </div>
    );
  }
}

export default Payment;
