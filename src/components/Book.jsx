import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import Review from './Review';
import * as userService from '../services/userService';
import * as orderService from '../services/orderService';
import { ToastContainer, toast } from 'react-toastify';

class Book extends Component {
  state = {
    count: 1,
    currentUser: null,
  };
  addToCart = async (book, quantity) => {
    let localCart = localStorage.getItem('cart');
    let cartArray;
    let bookObj = { ...book, quantity: quantity };
    if (localCart !== null) {
      cartArray = [...JSON.parse(localCart), bookObj];
    } else {
      cartArray = [bookObj];
    }
    if (this.state.currentUser !== null) {
      const result = await orderService.addSingleItemToCart({
        userId: this.state.currentUser.userId,
        bid: book.bid,
        quantity: quantity,
        price: book.price,
      });
      if (result.data.status === 0) {
        localStorage.setItem('cart', JSON.stringify(cartArray));
        toast.success(`${result.data.message}`, {
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
    } else {
      localStorage.setItem('cart', JSON.stringify(cartArray));
      toast.success(`Book Added To Cart`, {
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

  async componentDidMount() {
    const user = JSON.parse(await userService.getCurrentUser());
    this.setState({ currentUser: user });
  }

  handleChange = (event) => {
    this.setState({ count: event.target.value < 1 ? 1 : event.target.value });
  };
  render() {
    const { book } = this.props.location.state;
    const { count } = this.state;

    return (
      <>
        <div className="book__container">
          <div className="book__image">
            <Link to="/shop" style={{ textDecoration: 'none' }}>
              <p>Go Back</p>
            </Link>
            <img src={book.images} alt="book" />
          </div>
          <div className="book__info__container">
            <div className="book__title">{book.title}</div>
            <div className="book__author">by {book.author}</div>
            <div className="book__rating">
              <StarRatings
                rating={book.stars}
                starRatedColor="blue"
                starDimension={30}
                numberOfStars={5}
                name="rating"
                className="star"
              />
            </div>
            <div className="book__price">
              Price: {'  '}
              <span>${book.price}</span>
            </div>
            <p className="descrption__title">Description</p>
            <div className="book__description">
              <p>
                Ballycreggan, Northern Ireland, 1955Erich Bannon is happy in the
                small Irish village he has thought of as home since he arrived
                as a terrified, traumatised seven year old, one of the last
                Jewish children to escape Berlin in 1939. Now at twenty-three,
                it feels like all of his friends are drawn to The Promised Land,
                and he can understand why, but Israel is not for him. One by
                one, they leave, and Erich is bereft.He feels lost but a chance
                encounter with an Irish Catholic girl gives him hope. All he and
                Róisín want is to be allowed to love each other but the
                traditions and rules of their backgrounds forbid it. By the time
                he learns that Róisín wasn’t honest with him about her family
                and what kind of people they really are, it is too late and he
                finds himself unwittingly embroiled in a dangerous world from
                which there seems to be no escape.
              </p>
            </div>
            <div className="book__controls">
              <div className="book__quantity">
                Quantity:{' '}
                <input
                  type="number"
                  className="book__quantity__input"
                  value={count}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="book__confirm__btn">
              <button
                className="add__to__cart__btn"
                onClick={() => this.addToCart(book, count)}
              >
                Add to Cart{' '}
              </button>
            </div>
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
            {/*Add Review  */}
            <Review bid={book.bid} />
          </div>
        </div>
      </>
    );
  }
}
export default Book;
