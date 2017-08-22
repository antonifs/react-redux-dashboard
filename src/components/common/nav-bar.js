/**
 * Created by antonifs on 5/22/17.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';

class NavBar extends Component {

  render () {
    return(
      <nav className="navbar navbar-default navbar-static-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">Tinkerlust</Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Vendor <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><Link to="/vendor/return-rejected-item">Return Rejected Item</Link></li>
                  <li><Link to="/vendor/return-item-to-vendor">Return Item To Vendor</Link></li>
                  <li role="separator" className="divider"></li>
                  <li><Link to="/vendor/new-vendor-request">New Vendor Request</Link></li>
                  <li><Link to="/vendor/list">All Vendor</Link></li>
                  <li role="separator" className="divider"></li>
                  <li><Link to="/vendor/pickup">Pickup</Link></li>
                  <li role="separator" className="divider"></li>
                  <li><Link to="/vendor/landing-page">Vendor Landing Page</Link></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Users <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><Link to="/user/list">List of Users</Link></li>
                  <li role="separator" className="divider"></li>
                  <li><Link to="/user/user-group">User Group</Link></li>
                  <li><Link to="/user/user-auth">User Authorization</Link></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Product <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><Link to="/product/list">List of All Products</Link></li>
                  <li><Link to="/product/list-of-created-product">List of Curated Product</Link></li>
                  <li role="separator" className="divider"></li>
                  <li><Link to="/product/list-of-categories">List of Categories</Link></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Order <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><Link to="/order/list">List of Orders</Link></li>
                  <li role="separator" className="divider"></li>
                  <li><Link to="/order/payment-confirmation">Payment Confirmation</Link></li>
                  <li role="separator" className="divider"></li>
                  <li><Link to="/order/refund">Refund</Link></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Shipment <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><Link to="/shipment/list">List of Shipments</Link></li>
                  <li><Link to="/shipment/list-of-curated-product">Vendor Shipment</Link></li>
                  <li role="separator" className="divider"></li>
                  <li><Link to="/shipment/tracker">Tracker</Link></li>
                </ul>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Username <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><Link to="/account/update-profile/:id">Update Profile</Link></li>
                  <li><Link to="/account/change-password/:id">Change password</Link></li>
                  <li><Link to="/account/log-history/:id">Log history</Link></li>
                  <li role="separator" className="divider"></li>
                  <li><Link to="/user/login">Login</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
