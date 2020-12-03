import React, { Component } from 'react';
import bookCover from '../images/book_cover.jpg';
import Search from './common/search';
import StarRatings from 'react-star-ratings';
import * as bookService from '../services/bookService';
import { Link } from 'react-router-dom';

class Shop extends Component {
  state = {
    category: 'All',
    categories: [],
    pageCounter: 1,
    books: [],
  };
  async componentDidMount() {
    const categories = await bookService.getAllCategory();
    this.getBooks(this.state.pageCounter);
    this.setState({ categories: categories.data });
  }

  async getBooks(pageNo) {
    if (pageNo > 0) {
      const books = await bookService.getBooks(pageNo);
      this.setState({ books: books.data });
      this.setState({ pageCounter: pageNo });
    }
  }

  async getBooksByCategory(category, pageNo) {
    let books = [];
    if (pageNo > 0) {
      if (category === 'All') {
        books = await bookService.getBooks(pageNo);
      } else {
        books = await bookService.getByCategory(category, pageNo);
      }
      this.setState({ pageCounter: pageNo });
      this.setState({ category });
      this.setState({ books: books.data });
    }
  }

  render() {
    const { categories, pageCounter, books, category } = this.state;
    return (
      <>
        <div className="image__container">
          <img src={bookCover} alt="bookCover" className="book__cover" />
        </div>
        <div className="shop__container">
          {/* List of All Category */}
          <div className="category__container">
            <h3>Categories</h3>
            <ul className="category__list">
              <li onClick={() => this.getBooksByCategory('All', 1)}>
                All Categories
              </li>
              {categories.map((data) => (
                <li
                  key={categories.indexOf(data)}
                  onClick={() => this.getBooksByCategory(data, 1)}
                >
                  {data}
                </li>
              ))}
            </ul>
          </div>
          <div className="books__container">
            <div className="controls">
              <Search />
              {/* Buttons to toggle between 10 books at a time*/}
              <div className="page__btn">
                <button
                  onClick={() =>
                    this.getBooksByCategory(category, pageCounter + 1)
                  }
                >
                  Next
                </button>
                <button
                  onClick={() =>
                    this.getBooksByCategory(category, pageCounter - 1)
                  }
                >
                  Prev
                </button>
              </div>
            </div>
            {/*Books container to Display books  */}
            <div className="books">
              {books.map((data) => (
                <div className="book" key={books.indexOf(data)}>
                  <div className="left__container">
                    <Link to={{ pathname: '/book', state: { book: data } }}>
                      <img
                        src={data.images}
                        alt={data.title}
                        className="book__img"
                      />
                    </Link>
                  </div>
                  <div className="right__container">
                    <Link to={{ pathname: '/book', state: { book: data } }}>
                      <p className="title">{data.title}</p>
                    </Link>
                    <p className="author">{data.author}</p>
                    <div className="price">
                      Price: {'    '}
                      <span>$ {`${data.price}`}</span>
                      <div className="stars">
                        <StarRatings
                          rating={data.stars}
                          starRatedColor="blue"
                          starDimension={20}
                          numberOfStars={5}
                          name="rating"
                          className="star"
                        />
                      </div>
                    </div>
                    <p className="format">{data.format}</p>
                    <Link to={{ pathname: '/book', state: { book: data } }}>
                      <button className="view">View</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="controls controls_bottom">
              <div className="page__btn">
                <button
                  onClick={() =>
                    this.getBooksByCategory(category, pageCounter + 1)
                  }
                >
                  Next
                </button>
                <button
                  onClick={() =>
                    this.getBooksByCategory(category, pageCounter - 1)
                  }
                >
                  Prev
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Shop;
