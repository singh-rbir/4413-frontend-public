import React from 'react';
import { MdLocalShipping } from 'react-icons/md';
import { AiFillGift } from 'react-icons/ai';
import { HiOutlineChatAlt2 } from 'react-icons/hi';
import { GoCreditCard } from 'react-icons/go';
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
        <div className="service__item">
          <AiFillGift className="icon" />
          <p className="service__heading">Gifts and Sales</p>
          <p className="service__subheading">Gift with every order</p>
        </div>
        <div className="service__item">
          <HiOutlineChatAlt2 className="icon" />
          <p className="service__heading">Online Support</p>
          <p className="service__subheading">Online Support 24/7</p>
        </div>
        <div className="service__item">
          <GoCreditCard className="icon" />
          <p className="service__heading">Secure Payment</p>
          <p className="service__subheading">Fast and secure payments</p>
        </div>
      </div>
    </>
  );
}

export default Home;
