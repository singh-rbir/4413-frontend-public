import React from 'react';
import Joi from 'joi';
import Form from './common/form';
import * as userService from '../services/userService';
import { ToastContainer, toast } from 'react-toastify';
class AddAdress extends Form {
  state = {
    data: {
      streetno: '',
      streetName: '',
      city: '',
      province: '',
      country: '',
      zip: '',
      phone: '',
    },
    errors: {},
  };

  schema = {
    streetno: Joi.number(),
    streetName: Joi.string(),
    city: Joi.string(),
    province: Joi.string(),
    country: Joi.string(),
    zip: Joi.string(),
    phone: Joi.number(),
  };

  doSubmit = async () => {
    try {
      const {
        streetno,
        streetName,
        city,
        province,
        country,
        zip,
        phone,
      } = this.state.data;
      let address = {
        userId: this.props.currentUser.userId,
        streetNo: streetno,
        streetName: streetName,
        city: city,
        province: province,
        country: country,
        zip: zip,
        phone: phone,
      };

      const result = await userService.addAddress(address);

      if (result.data.status === 0) {
        this.props.toggle();
        toast.success(`Address Added`, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => (window.location = "/cart"), 2000);
        
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
            <p>Enter your delivery address</p>
            {this.renderInput('streetno', 'Enter your Street No', 'StreetNo')}
            {this.renderInput(
              'streetName',
              'Enter your Street Name',
              'StreetName'
            )}
            {this.renderInput('city', 'Enter your City', 'City')}
            {this.renderInput('province', 'Enter your Province', 'Province')}
            {this.renderInput('country', 'Enter your Country', 'Country')}
            {this.renderInput(
              'zip',
              'Enter your zip code',
              'Zip Code (eg: L1R342)'
            )}
            {this.renderInput(
              'phone',
              'Enter your phone number',
              'Your Phone Number (10 digits)'
            )}
            {this.renderButton('Confirm Address')}

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
          </div>
        </form>
      </div>
    );
  }
}

export default AddAdress;
