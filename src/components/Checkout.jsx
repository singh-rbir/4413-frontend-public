import React, { Component } from 'react';
import * as orderService from '../services/orderService';
import * as userService from '../services/userService';
import Joi from 'joi';
import {Link} from 'react-router-dom';
import Payment from './Payment';
import AddAddress from './AddAddress';
import { AiTwotonePhone } from 'react-icons/ai';


class Checkout extends Component {
  state = {
    currentUser: {},
  };
  
  async componentDidMount() {
    const currentuser = JSON.parse(userService.getCurrentUser());
    this.setState({ currentUser: currentuser });
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
        <br/>
        <h1>Checkout</h1>
        <div className="form__container">
          
          {/* for debugging */}
          {/* {console.debug("props address: " + Object.keys(this.props.address.status).toString())} */}

          {/* if server returns status 1 (no address stored), then show addAddress form, else display the address */}
          {this.props.address.status == null ? (
            <div style={{ width: '100%', textAlign: 'center', marginTop: '100px'}}>
              <h4>Your Address</h4>
              <div style={{display: 'inline-block', textAlign: 'left'}}>
                <br/> 
                <div style={{color: 'gray'}}>
                  <h5>{streetNo} {streetName}, {city}</h5>
                  <h5>{province}, {country} {zip}</h5>
                  <br/>
                </div>
              </div>
              <h5>
                <span style={{ textAlign: 'center', color: 'black', display: 'inline' }}><AiTwotonePhone />: </span>
                <span style={{ color: 'gray' }}>{phone}</span>
              </h5>

              {/* <br/>
              <h4 style={{ color: '#4a8cff'}}>- OR -</h4>
              <br/> */}
              <br/>
            </div>
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
