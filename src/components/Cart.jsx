import React, { Component } from 'react';
import * as orderService from '../services/orderService';
import * as userService from '../services/userService';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import _ from 'lodash';
import Checkout from './Checkout';

class Cart extends Component {
  state = {
    cartItems: JSON.parse(localStorage.getItem('cart')),
    currentuser: JSON.parse(userService.getCurrentUser()),
    address: {},
  };

  async componentDidMount() {
    const { currentuser, cartItems } = this.state;

    if (currentuser) {
      await this.addItemsToCart();
    }
  }
  addItemsToCart = async () => {
    const { currentuser, cartItems } = this.state;
    let tempArray = [];
    console.log('Inside addCartItems Length', cartItems);
    for (let i = 0; i < cartItems.length; i++) {
      tempArray = [
        ...tempArray,
        {
          bid: cartItems[i].bid,
          quantity: cartItems[i].quantity,
          price: cartItems[i].price,
        },
      ];
    }
    console.log(tempArray);
    this.setState({ cartItems: tempArray });
    console.log('Inside addCartItems Length', cartItems);
    const result1 = await orderService.addItemsToCart({
      userId: currentuser.userId,
      itemList: tempArray,
    });
    console.log(result1);
  };

  removeBook = async (bid) => {
    const { cartItems, currentuser } = this.state;
    let newList = _.filter(cartItems, (item) => item.bid !== bid);
    localStorage.setItem('cart', JSON.stringify(newList));
    const result = await orderService.removeCartItem({
      userId: currentuser.userId,
      bid: bid,
    });
    if (result.data.status === 0) {
      console.log(result);
      toast.success(`${result.data.message}`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      this.setState({ cartItems: newList });
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
  };

  getTotal = () => {
    const { cartItems } = this.state;
    let cartTotal = 0;
    for (let i = 0; i < cartItems.length; i++) {
      cartTotal = cartTotal + cartItems[i].price * cartItems[i].quantity;
    }
    return parseFloat(cartTotal).toFixed(2);
  };

  goToCheckout = async () => {
    window.location = '/checkout';
  };

  render() {
    const { currentuser, cartItems } = this.state;
    return (
      <div className="cart__container">
        <>
          {' '}
          {cartItems !== null ? (
            <>
              <h1>Cart</h1>
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((data) => {
                    return (
                      <>
                        <tr>
                          <td>{data.title}</td>
                          <td>{data.quantity}</td>
                          <td>{data.price}</td>
                          <td>{data.price * data.quantity}</td>
                          <td>
                            <button
                              className="remove"
                              onClick={() => this.removeBook(data.bid)}
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>

              <div className="total">
                <p>
                  Your Cart Total is: <span>${this.getTotal()}</span>
                </p>
              </div>
              {currentuser ? (
                <>
                  <Checkout address={this.state.address} />
                </>
              ) : (
                <>
                  <Link to={{ pathname: '/signin', state: { backto: 'cart' } }}>
                    SignIn to Checkout
                  </Link>
                </>
              )}
            </>
          ) : (
            <h1>Nothing In Cart</h1>
          )}{' '}
        </>
      </div>
    );
  }
}

export default Cart;
