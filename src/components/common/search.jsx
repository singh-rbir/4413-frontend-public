import React, { useEffect, useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import * as bookService from '../../services/bookService';

const Search = () => {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);
  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      const result = await bookService.getBookBySearchTitle(value);
      setItems(result.data);
      return console.log(items);
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [value]);

  return (
    <div className="search__bar">
      <div className="search__bar__input">
        <input
          type="text"
          name="search"
          onChange={handleOnChange}
          aria-label="Search all Books"
          placeholder="Search all Books"
        />
        <FcSearch className="search_logo" />
      </div>
    </div>
  );
};

export default Search;
