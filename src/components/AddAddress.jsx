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
      address: {
        streetno: '',
        streetName: '',
        city: '',
        province: '',
        country: '',
        zip: '',
        phone: '',
      },
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
      console.log(address);
      const result = await userService.addAddress(address);
      console.log(result);
      if (result.data.status === 0) {
        toast.success(`Address Added`, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
  async componentDidMount() {
    const address = await userService.getAddress(
      JSON.parse(userService.getCurrentUser()).userId
    );
    this.setState({ address: address.data });
    this.setState({ streetno: this.state.address.streetNo });
    this.setState({ streetName: this.state.address.streetName });
    this.setState({ city: this.state.address.city });
    this.setState({ province: this.state.address.province });
    this.setState({ country: this.state.address.country });
    this.setState({ zip: this.state.address.zip });
    this.setState({ phone: this.state.address.phone });
  }
  render() {
    const {
      streetno,
      streetName,
      city,
      province,
      country,
      zip,
      phone,
    } = this.state;

    return (
      <div className="signup__form">
        <form onSubmit={this.handleSubmit}>
          <div className="form__body">
            <p>Enter your delivery address</p>
            {this.renderInput(
              'streetno',
              'Enter your Street No',
              'StreetNo',
              'number',
              streetno
            )}
            {this.renderInput(
              'streetName',
              'Enter your Street Name',
              'StreetName',
              'text',
              streetName
            )}
            {this.renderInput('city', 'Enter your City', 'City', 'text', city)}
            {this.renderInput(
              'province',
              'Enter your Province',
              'Province',
              'text',
              province
            )}
            {this.renderInput(
              'country',
              'Enter your Country',
              'Country',
              'text',
              country
            )}
            {this.renderInput(
              'zip',
              'Enter your zip code',
              'Zip Code (eg: L1R342)',
              'text',
              zip
            )}
            {this.renderInput(
              'phone',
              'Enter your phone number',
              'Your Phone Number (10 digits)',
              'number',
              phone
            )}
            {this.renderButton('Confirm Address')}
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

export default AddAdress;
