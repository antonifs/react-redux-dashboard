import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Components
import App from './components/App';
import DashboardPage from './components/dashboard/dashboard-page';
import VendorListPage from './components/vendor/vendor-list-page';
import ShipmentListPage from './components/shipment/shipment-list-page';
import OrderListPage from './components/order/order-list-page';
import ProductListPage from './components/product/product-list-page';
import UserListPage from './components/user/user-list-page';
import UserLoginPage from './components/user/user-login-page';

export default (
  <Route path="/" components={App}>
    <IndexRoute component={DashboardPage} />
    <Route path="vendor/list" components={VendorListPage} />
    <Route path="shipment/list" components={ShipmentListPage} />
    <Route path="order/list" components={OrderListPage} />
    <Route path="product/list" components={ProductListPage} />
    <Route path="user/list" components={UserListPage} />
    <Route path="user/login" components={UserLoginPage} />
  </Route>
);
