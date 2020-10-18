import React from 'react';
import logo from '../../assets/images/users/user.jpg';
import codemiLogo from '../../assets/images/codemi-394x150.png'

function Header() {
  return (
    <div className="topbar">
      <div className="navbar navbar-default" role="navigation">
        <div className="container">
          <div className="">
            {/* <div className="pull-left">
              <button
                // onClick={::this.onBurgerClick}
                className="button-menu-mobile open-left waves-effect waves-ripple"
              >
                <i className="md md-menu" />
              </button>
              <span className="clearfix" />
            </div> */}

            <div className="navbar-left pull-left logo">
              <a href=" ">
                <img src={codemiLogo} width="150" height="50" />
              </a>
            </div>

            <div className="navbar-left pull-right user-detail">
              <a
                href=" "
                className="dropdown-toggle profile"
                data-toggle="dropdown"
                aria-expanded="true"
              >
                <img src={logo} alt="user-img" className="img-circle" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href=" ">
                    <i className="md md-face-unlock" /> Profile
                  </a>
                </li>
                <li>
                  <i className="md md-settings" /> Change Password
                </li>
                <li>
                  <a href=" ">
                    <i className="md md-lock" /> Lock screen
                  </a>
                </li>
                <li>
                  <a href=" ">
                    <i className="md md-settings-power" /> Logout
                  </a>
                </li>
              </ul>
            </div>

            <span className="navbar-left app-search pull-right hidden-xs">
              <a href=" ">
                <i className="fa fa-bell fa-4" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
