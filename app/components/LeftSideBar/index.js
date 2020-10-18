import React from 'react';
import Scroll from 'react-awesome-scroll';
import './css.css';

function LeftSideBar() {
  return (
    <div className="left side-menu">
      <div id="sidebar-menu">
        <ul>
          <li className="menu-title" style={{ color: '#32a83a' }}>
            Home
          </li>
          <hr />
          <li className="menu-title">
            <span> LEARNING </span>
          </li>
          <li>
            <a href=" " className="waves-effect waves-red">
              <i className="ti-home"> </i>
              <span> Courses </span>
            </a>
          </li>
          <li>
            <a href=" " className="waves-effect waves-red">
              <i className="ti-panel"> </i>
              <span> Learning Plan </span>
            </a>
          </li>
          <li className="menu-title">MANAGE</li>
          <li>
            <a href=" " className="waves-effect waves-red">
              <i className="ti-user"> </i>
              <span> users </span>
            </a>
          </li>
          <li>
            <a href=" " className="waves-effect waves-red">
              <i className="ti-pencil"> </i>
              <span> Skills </span>
            </a>
          </li>
          <li>
            <a href=" " className="waves-effect waves-red">
              <i className="ti-book"> </i>
              <span> Reports </span>
            </a>
          </li>
          <li>
            <a href=" " className="waves-effect waves-red">
              <i className="ti-pulse"> </i>
              <span> Analytics </span>
            </a>
          </li>
          <li>
            <a href=" " className="waves-effect waves-red">
              <i className="ti-announcement"> </i>
              <span> Announcemnets </span>
            </a>
          </li>
          <li className="menu-title">CONFIGURE</li>
          <li>
            <a href=" " className="waves-effect waves-red">
              <i className="ti-star"> </i>
              <span> Points </span>
            </a>
          </li>
          <li>
            <a href=" " className="waves-effect waves-red">
              <i className="ti-cup"> </i>
              <span> Reward </span>
            </a>
          </li>
          <li>
            <a href=" " className="waves-effect waves-red">
              <i className="ti-email"> </i>
              <span> Email Templates </span>
            </a>
          </li>
          <li>
            <a href=" " className="waves-effect waves-red">
              <i className="ti-info"> </i>
              <span> Company Info </span>
            </a>
          </li>
          <li>
            <a href=" " className="waves-effect waves-red">
              <i className="ti-user"> </i>
              <span> Billing </span>
            </a>
          </li>
        </ul>

        <div className="clearfix" />
      </div>
    </div>
  );
}

export default LeftSideBar;
