import React, { Component } from 'react';
import bookCover from '../images/book_cover.jpg';
import Search from './common/search';
import * as bookService from '../services/bookService';

class Shop extends Component {
  state = {
    categories: [],
  };
  async componentDidMount() {
    const categories = await bookService.getAllCategory();
    this.setState({ categories: categories.data });
  }
  render() {
    const { categories } = this.state;
    return (
      <>
        <div className="image__container">
          <img src={bookCover} alt="bookCover" className="book__cover" />
        </div>
        <Search />
        <div className="shop__container">
          <div className="category__container">
            <h3>Categories</h3>
            <ul className="category__list">
              {categories.map((data) => (
                <li key={categories.indexOf(data)}>{data}</li>
              ))}
            </ul>
          </div>
          <div className="books__container"></div>
        </div>
      </>
    );
  }
}

export default Shop;
