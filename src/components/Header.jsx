import React from 'react';
const Header = () => {
  return (<header>
    <nav className="nav-wrapper transparent">
      <div className="container">
        <a href="#" className="brand-logo">Photo Mania</a>
        <a href="#" className="sidenav-trigger" data-target="mobile-menu">
          <i className="material-icons">menu</i>
        </a>
        <ul className="right hide-on-med-and-down">
          <li><a href="#photos">Photo's</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#" className="tooltipped btn-floating btn-small pink lighten-1" data-position="bottom" data-tooltip="Instagram">
            <i className="fab fa-instagram"></i>
          </a></li>
          <li><a href="#" className="tooltipped btn-floating btn-small blue darken-4" data-position="bottom" data-tooltip="Facebook">
            <i className="fab fa-facebook"></i>
          </a></li>
          <li><a href="#" className="tooltipped btn-floating btn-small  light-blue accent-3" data-position="bottom" data-tooltip="Twitter">
            <i className="fab fa-twitter"></i>
          </a></li>
        </ul>
        <ul className="sidenav grey lighten-2" id="mobile-menu">
          <li><a href="#photos">Photo's</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  </header>);
}

export default Header;