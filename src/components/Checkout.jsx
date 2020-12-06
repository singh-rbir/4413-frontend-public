import React, { Component } from 'react';
import * as orderService from '../services/orderService';
import * as userService from '../services/userService';
import Joi from 'joi';
import Form from './common/form';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Payment from './Payment';
import AddAddress from './AddAddress';
import { AiTwotonePhone } from 'react-icons/ai';
class Checkout extends Component {
  state = {
    currentUser: {},
    showAddressForm: false,
  };
  
  async componentDidMount() {
    const currentuser = JSON.parse(userService.getCurrentUser());
    this.setState({ currentUser: currentuser });
  }
  toggleShowForm() {
    console.log('Toggle clicked');
    this.setState({
      showAddressForm: !this.state.showAddressForm,
    });
  }

  showAddressForm = () => {
    console.log("show address clicked");
  }

  render() {
    const {
      zip,
      province,
      city,
      streetNo,
      streetName,
      phone,
      country
    } = this.props.address;
    return (
      <div className="checkout__container">
        <br />
        <h1>Checkout</h1>
        <div className="form__container">
          {this.props.address !== null ? (
            <>
              {!this.state.showAddressForm ? (
                <>
                  <div
                    style={{
                      width: '100%',
                      textAlign: 'center',
                      marginTop: '100px',
                    }}
                  >
                    <h4>Your Address</h4>
                    <div style={{ display: 'inline-block', textAlign: 'left' }}>
                      <br />
                      <div style={{ color: 'gray' }}>
                        <h5>
                          {streetNo} {streetName}, {city}
                        </h5>
                        <h5>
                          {province}, {country} {zip}
                        </h5>
                        <br />
                      </div>
                    </div>
                    <h5>
                      <span
                        style={{
                          textAlign: 'center',
                          color: 'black',
                          display: 'inline',
                        }}
                      >
                        <AiTwotonePhone />:{' '}
                      </span>
                      <span style={{ color: 'gray' }}>{phone}</span>
                    </h5>
                    <button
                      onClick={() => this.toggleShowForm()}
                      style={{
                        backgroundColor: ' #03071e',
                        color: '#4a8cff',
                        border: 0,
                        marginTop: '30px',
                        fontSize: '23px',
                      }}
                    >
                      Change Address
                    </button>
                    {/* <br/>
              <h3 style={{ color: '#4a8cff'}}>- OR -</h3> */}
                    <br />
                  </div>
                </>
              ) : (
                <div style={{ marginLeft: '50px' }}>
                  <AddAddress
                    currentUser={this.state.currentUser}
                    toggle={() => this.toggleShowForm()}
                  />
                  <button
                    onClick={() => this.toggleShowForm()}
                    style={{
                      backgroundColor: ' #03071e',
                      color: '#4a8cff',
                      border: 0,
                      marginTop: '30px',
                      fontSize: '23px',
                    }}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </>
          ) : (
            <div style={{ marginLeft: '50px' }}>
              <AddAddress
                currentUser={this.state.currentUser}
                toggle={() => this.toggleShowForm()}
              />
              <button
                onClick={() => this.toggleShowForm()}
                style={{
                  backgroundColor: ' #03071e',
                  color: '#4a8cff',
                  border: 0,
                  marginTop: '30px',
                  fontSize: '23px',
                }}
              >
                Cancel
              </button>
            </div>
          )}

          <Payment currentUser={this.state.currentUser} />
        </div>
      </div>
    );
  }
}

export default Checkout;
