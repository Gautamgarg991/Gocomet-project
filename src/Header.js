import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppinBasketIcon from "@material-ui/icons/ShoppingBasket"
function Header() {
  return (
   <div className='navbar'>
    <nav className="header">
        <img className="header__logo"
        src="https://mumbaimirror.indiatimes.com/photo/80601325.cms"
        alt=''
        />
        <div className='header__nav'>
          <ul className='header__navList'>
            <li className='navList__item'>MEN</li>
            <li className='navList__item'>WOMEN </li>
            <li className='navList__item'>KIDS</li>
            <li className='navList__item'>HOME & LIVING</li>
            <li className='navList__item'>OFFERS</li>
          </ul>
        </div>
        {/* Search Bar and Icon */}
        <div className='header__search'>
        <input type="text" className='header__searchBar' placeholder='Search for products, brands and more'></input>
        <SearchIcon className="header__searchIcon"/>
        </div>
        {/* Profile, Wishlist and Bag */}
        <div className='header__nav2'>
          <ul className='header__navList'>
            <li className='navList__item'>PROFILE</li>
            <li className='navList__item'>WISHLIST </li>
            <li className='navList__item'>BAG</li>
          </ul>
        </div>
        {/* Basket and Counter */}
        <div className='header__basket'>
          <ShoppinBasketIcon/>
          <span className='basket_counter'>0</span>
        </div>
    </nav>
   </div> 
  );
}

export default Header
