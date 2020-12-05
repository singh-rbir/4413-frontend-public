import React from 'react';
import Joi from 'joi';
import Form from './common/form';
import * as userService from '../services/userService';
import { ToastContainer, toast } from 'react-toastify';
class SignIn extends Form {
  state = {
    data: { email: '', password: '' },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label('Email'),
    password: Joi.string().required().label('Password'),
  };

  doSubmit = async () => {
    try {
      const { email, password } = this.state.data;
      const result = await userService.login(email, password);
      if (result.status === 0) {
        console.log('Inside status');

        localStorage.setItem('user', JSON.stringify(result));
        toast.success(`Logged In`, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        if (this.props.location.state !== null) {
          setTimeout(() => (window.location = '/cart'), 1000);
        } else {
          setTimeout(() => (window.location = '/'), 1000);
        }
      } else {
        toast.error(`${result.message}`, {
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
    //  if (authService.getCurrentUser()) return <Redirect to="/" />;

    return (
      <div className="signup__form">
        {/* <div className='form__header'>
            <p>Sign up for free to start catching bugs.</p>
            <button className='google_btn'>SIGN UP WITH GOOGLE</button>
          </div>
          <hr /> */}
        <form onSubmit={this.handleSubmit}>
          <div className="form__body">
            <p>Sign in with your email address</p>
            {this.renderInput('email', 'Enter your Email', 'Your Email')}
            {this.renderInput(
              'password',
              'Enter your Password',
              'Your Password',
              'password'
            )}
            {this.renderButton('SIGN IN')}
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

export default SignIn;
