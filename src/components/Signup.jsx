import React from 'react';
import Joi from 'joi';
import Form from './common/form';
import * as userService from '../services/userService';
import { ToastContainer, toast } from 'react-toastify';

class SignUp extends Form {
  state = {
    data: { firstname: '', lastname: '', email: '', password: '' },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label('Email'),
    password: Joi.string().required().min(5).label('Password'),
    firstname: Joi.string().required().label('FirstName'),
    lastname: Joi.string().required().label('LastName'),
  };

  doSubmit = async () => {
    const { firstname, lastname, email, password } = this.state.data;
    try {
      const user = {
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password,
      };
      const { data } = await userService.register(user);
      console.log(data);
      if (data.status === 1) {
        toast.error(`${data.message}`, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        const result = await userService.login(email, password);
        if (result.status === 0) {
          localStorage.setItem('user', JSON.stringify(result));
          toast.success(`Registered Successfully`, {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => (window.location = '/'), 1000);
        }
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
      <div className="form__container">
        <div className="signup__form">
          {/* <div className='form__header'>
            <p>Sign up for free to start catching bugs.</p>
            <button className='google_btn'>SIGN UP WITH GOOGLE</button>
          </div>
          <hr /> */}
          <form onSubmit={this.handleSubmit}>
            <div className="form__body">
              <p>Sign up with your email address</p>
              {this.renderInput('email', "What's your email?", 'Your Email')}
              {this.renderInput(
                'firstname',
                "What's your firstname?",
                'Your First Name'
              )}
              {this.renderInput(
                'lastname',
                "What's your lastname?",
                'Your Last Name'
              )}
              {this.renderInput(
                'password',
                'Create a Password',
                'Your Password (Choose a Strong one)',
                'password'
              )}
              {this.renderButton('SIGN UP')}
            </div>
          </form>
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
      </div>
    );
  }
}

export default SignUp;
