import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import 'semantic-ui-css/semantic.css';
import { Roles } from 'meteor/alanning:roles';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import ListMenuItems from '../pages/ListMenuItems';
import ListAllMenuItems from '../pages/ListAllMenuItems';
import ListMenuItemsAdmin from '../pages/ListMenuItemsAdmin';
import ListMenuItemsVendor from '../pages/ListMenuItemsVendor';
import AddMenuItem from '../pages/AddMenuItem';
import NotFound from '../pages/NotFound';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Signout from '../pages/Signout';
import FoodListings from '../pages/FoodListings';
import ListReviews from '../pages/ListReviews';
import EditMenuItem from '../pages/EditMenuItem';
import ReviewMenuItem from '../pages/ReviewMenuItem';
import EditReviewMenuItem from '../pages/EditReviewMenuItem';
import ListTableReviews from '../pages/ListTableReviews';
import ListTableReviewsAdmin from '../pages/ListTableReviewsAdmin';
import AvailableNow from '../pages/AvailableNow';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (
        <Router>
          <div>
            <NavBar/>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route path="/signin" component={Signin}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/listings" component={FoodListings}/>
              <Route path="/allListings" component={ListAllMenuItems}/>
              <ProtectedRoute path="/list" component={ListMenuItems}/>
              <Route path="/review/:_id" component={ListReviews}/>
              <Route path="/available" component={AvailableNow}/>
              <ProtectedRoute path="/addReview/:_id" component={ReviewMenuItem}/>
              <ProtectedRoute path="/editReview/:_id" component={EditReviewMenuItem}/>
              <ProtectedRoute path="/reviews/" component={ListTableReviews}/>
              <VendorAdminProtectedRoute path="/add" component={AddMenuItem}/>
              <VendorAdminProtectedRoute path="/edit/:_id" component={EditMenuItem}/>
              <AdminProtectedRoute path="/admin" component={ListMenuItemsAdmin}/>
              <AdminProtectedRoute path="/list" component={ListMenuItems}/>
              <AdminProtectedRoute path="/adminReviews" component={ListTableReviewsAdmin}/>
              <VendorProtectedRoute path="/vendor" component={ListMenuItemsVendor}/>
              <ProtectedRoute path="/signout" component={Signout}/>
              <Route component={NotFound}/>
            </Switch>
            <Footer/>
          </div>
        </Router>
    );
  }
}

/**
 * ProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isLogged = Meteor.userId() !== null;
      return isLogged ?
          (<Component {...props} />) :
          (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
      );
    }}
  />
);

/**
 * AdminProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
          const isLogged = Meteor.userId() !== null;
          const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
          return (isLogged && isAdmin) ?
              (<Component {...props} />) :
              (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
              );
        }}
    />
);

const VendorProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
          const isLogged = Meteor.userId() !== null;
          const isVendor = Roles.userIsInRole(Meteor.userId(), 'vendor');
          return (isLogged && isVendor) ?
              (<Component {...props} />) :
              (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
              );
        }}
    />
);

const VendorAdminProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
          const isLogged = Meteor.userId() !== null;
          const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
          const isVendor = Roles.userIsInRole(Meteor.userId(), 'vendor');
          return ((isLogged && isAdmin) || (isLogged && isVendor)) ?
              (<Component {...props} />) :
              (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
              );
        }}
    />
);

/** Require a component and location to be passed to each ProtectedRoute. */
ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

/** Require a component and location to be passed to each AdminProtectedRoute. */
AdminProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

VendorProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

VendorAdminProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

export default App;
