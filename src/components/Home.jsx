import React from 'react';
import { MdLocalShipping } from 'react-icons/md';
import reading_time from '../images/reading_time.svg';

function Home() {
  return (
    <>
      <div className="main__container">
        <div className="main__heading">
          <p className="first_line">
            Mom <span>&</span> Pop Book Store
          </p>
          <p className="second_line">by Brick and Mortar Company</p>
        </div>
        <img src={reading_time} alt="reading_time" />
      </div>
      <div className="service__container">
        <div className="service__item">
          <MdLocalShipping className="icon" />
          <p className="service__heading">Free Shipping</p>
          <p className="service__subheading">Delivery in one Day</p>
        </div>
      </div>
    </>
  );
}

export default Home;
