import $ from "jquery";
import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { data } from "../json/content";
import "../app.css";

class MobNavigation extends Component {
  toggleMenu = e => {
    $(e.target).toggleClass("menu-box-open");
    $(e.target)
      .next()
      .slideToggle("slow")
      .removeClass("open-links");
  };
  menuToggle = e => {
    $("#rapid-menu").slideToggle("slow");
  };
  subLinKClick = e => {
    $("#rapid-menu").slideToggle("slow");
  };

  render() {
    return (
      <nav className="mobile-nav-bar-section navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          {/* Brand and toggle get grouped for better mobile display --> */}
          <div className="navbar-header">
            <button
              type="button"
              className="pull-left navbar-toggle collapsed custom-hamburger"
              onClick={this.menuToggle}
              data-toggle="collapse"
              data-target="#rapid-menu"
              aria-expanded="false"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="logo-text text-center">
              <Link to="/">
                <span className="rapid-text">RAPID</span>
                <span className="es6-text">ES6</span>
              </Link>
            </div>
            <div className="tag-line text-center">
              Your Guide for quick checks
            </div>
          </div>

          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="rapid-menu">
            <div className="row navigation-links-section">
              {data.es6 &&
                data.es6.map((topics, index) => {
                  return (
                    <div className="menu-box " key={index}>
                      <div className="menu" onClick={this.toggleMenu}>
                        {topics.menu}
                      </div>
                      <ul className="menu-items list-unstyled">
                        {topics.sub_menu &&
                          topics.sub_menu.map((subTopic, ind) => {
                            return (
                              <li onClick={this.subLinKClick} key={ind}>
                                <NavLink
                                  activeClassName="active"
                                  to={`/${Object.keys(subTopic)[1]}`}
                                >
                                  {subTopic.sub_menu_name}
                                </NavLink>
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  );
                })}
            </div>
          </div>
          {/*!-- /.navbar-collapse -->*/}
        </div>
      </nav>
    );
  }
}

export default MobNavigation;
