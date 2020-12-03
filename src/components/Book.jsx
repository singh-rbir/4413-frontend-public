import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import Review from './Review';
class Book extends Component {
  state = {
    count: 1,
  };
  addToCart = () => {
    console.log('Inside Add to Cart');
  };

  handleChange = (event) => {
    this.setState({ count: event.target.value < 1 ? 1 : event.target.value });
    if (event.target.value >= 1) {
    }
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
              <span>{book.price}</span>
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
              <button className="add__to__cart__btn" onClick={this.addToCart}>
                Add to Cart{' '}
              </button>
            </div>
            {/*Add Review  */}
            <Review bid={book.bid} />
          </div>
        </div>
      </>
    );
  }
}
export default Book;
