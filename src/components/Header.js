import * as React from 'react';
import { Link } from 'react-router-dom';
import headerBanner from '../assets/images/header.jpg';

const menus = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contacts', path: '/contacts' },
];

const Header = () => {
  const [menu, setMenu] = React.useState(false);
  const [page, setPage] = React.useState('Home');
  const menuHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setMenu(!menu);
  };
  const renderMenus = menus.map((item) => (
    <Link to={item.path} key={item.name}>
      <div
        onClick={() => {
          setMenu(false);
          setPage(item.name);
        }}
        className="header-nav__items-item"
      >
        {item.name}
      </div>
    </Link>
  ));
  return (
    <React.Fragment>
      <div
        className={menu ? 'header-banner hide' : 'header-banner'}
        style={{ backgroundImage: `url(${headerBanner})` }}
      ></div>
      <header className="header">
        <div className="header-nav">
          <div className="header-nav__container container">
            <div className="header-page">
              <i className="fa-solid fa-user-lock"></i>
            </div>
            <div className="header-nav__logo">
              <Link to="/" onClick={() => setPage('Home')}>
                Gabriel Tomsic
              </Link>
            </div>
            <div className="header-nav__items">{renderMenus}</div>
            <div onClick={menuHandler} className="header-menu">
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
        <div
          className={
            menu
              ? 'header-mobile__nav header-mobile__nav-active'
              : 'header-mobile__nav'
          }
        >
          <div onClick={menuHandler} className="header-mobile__nav-close">
            <i className="fa-solid fa-xmark"></i>
          </div>
          {renderMenus}
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
