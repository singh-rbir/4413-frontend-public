import React, { useEffect, useState } from 'react';
import * as orderService from '../services/orderService';
import * as userService from '../services/userService';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import _ from 'lodash';
const currentuser = JSON.parse(userService.getCurrentUser());

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    let localCart = [];
    if (JSON.parse(localStorage.getItem('cart'))) {
      localCart = JSON.parse(localStorage.getItem('cart'));
    }

    if (currentuser) {
      const getCartItems = async () => {
        const result = await orderService.getCart({
          userId: currentuser.userId,
        });
        if (result.data.cartItems) {
          localCart = [...localCart, ...result.data.cartItems];
        }

        console.log(localCart);
        console.log(result.data);
        setCartItems(localCart);
      };
      getCartItems();
    } else {
      setCartItems(localCart);
    }
  }, []);

  const getTotal = () => {
    let cartTotal = 0;
    for (let i = 0; i < cartItems.length; i++) {
      cartTotal = cartTotal + cartItems[i].price * cartItems[i].quantity;
    }
    return parseFloat(cartTotal).toFixed(2);
  };

  const removeBook = (bid) => {
    let newList = _.filter(cartItems, (item) => item.bid !== bid);
    localStorage.setItem('cart', JSON.stringify(newList));
    setCartItems(newList);
  };

  const goToCheckout = async () => {
    console.log('Go To Checkout');
    let tempArray = [];
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
    console.log(currentuser);
    const result = await orderService.addItemsToCart({
      userId: currentuser.userId,
      itemList: tempArray,
    });
    if (result.data.status === 0) {
      console.log('Inside status check');
      console.log(result);
      window.location = '/checkout';
    } else {
    }
  };

  let total = getTotal();

  return (
    <div className="cart__container">
      {cartItems === [] ? (
        <>
          {' '}
          {cartItems !== null ? (
            <>
              <h1>Cart</h1>
              <table>
                <tr>
                  <th>Title</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total Price</th>
                  <th></th>
                </tr>

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
                            onClick={() => removeBook(data.bid)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </table>
              <div className="total">
                <p>
                  Your Cart Total is: <span>${total}</span>
                </p>
              </div>
              {currentuser ? (
                <div className="goto__checkout">
                  <button onClick={goToCheckout}>Go to Checkout Page</button>
                </div>
              ) : (
                <Link to={{ pathname: '/signin', state: { backto: 'cart' } }}>
                  SignIn to Checkout
                </Link>
              )}
            </>
          ) : (
            <h1>Nothing In Cart</h1>
          )}{' '}
        </>
      ) : (
        <h1>Nothing In Cart</h1>
      )}
    </div>
  );
}

export default Cart;
