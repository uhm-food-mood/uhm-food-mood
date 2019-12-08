import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Image, Icon } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    return (
      <Menu attached="top" borderless inverted>
        <Menu.Item as={NavLink} activeClassName="" exact to="/">
          <Image src='images/foodmood.png' size='mini'/>
        </Menu.Item>
        <Menu.Item as={NavLink} activeClassName="active"
                   exact to="/listings" key='add' className='montserrat'>FOOD LISTINGS</Menu.Item>
        <Menu.Item as={NavLink} activeClassName="active"
                   exact to="/allListings" key='add' className='montserrat'>FOOD OPTIONS</Menu.Item>
        <Menu.Item as={NavLink} activeClassName="active"
                   exact to="/available" key='add' className='montserrat'>FOOD AVAILABLE NOW</Menu.Item>
        {this.props.currentUser ? (
          [<Menu.Item as={NavLink} className='montserrat' activeClassName="active"
                      exact to="/list" key='add'>FAVORITES</Menu.Item>]
      ) : ''}
        {this.props.currentUser ? (
            [<Menu.Item as={NavLink} className='montserrat' activeClassName="active"
                        exact to="/reviews" key='add'>YOUR REVIEWS</Menu.Item>]
        ) : ''}
        {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
            <Menu.Item as={NavLink} className='montserrat' activeClassName="active"
                       exact to="/admin" key='admin'>MANAGE LISTINGS</Menu.Item>
        ) : ''}
        {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
            <Menu.Item as={NavLink} className='montserrat' activeClassName="active"
                       exact to="/adminReviews" key='admin'>MANAGE REVIEWS</Menu.Item>
        ) : ''}
        {Roles.userIsInRole(Meteor.userId(), 'vendor') ? (
            <Menu.Item as={NavLink} className='montserrat' activeClassName="active"
                       exact to="/vendor" key='vendor'>VENDOR LISTINGS</Menu.Item>
        ) : ''}
        <Menu.Item position="right">
          {this.props.currentUser === '' ? (
            <Dropdown className='josefin' text="LOGIN" pointing="top right" icon={'user'}>
              <Dropdown.Menu className='icon'>
                <Dropdown.Item icon="user" text="Sign In" as={NavLink} exact to="/signin"/>
                <Dropdown.Item icon={<Icon name='add user' color= 'black'/>}
                               text="Sign Up" as={NavLink} exact to="/signup"/>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Dropdown className='montserrat' text={this.props.currentUser} pointing="top right" icon={'user'}>
              <Dropdown.Menu>
                <Dropdown.Item icon="sign out" text="Sign Out" as={NavLink} exact to="/signout"/>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Menu.Item>
      </Menu>
    );
  }
}

/** Declare the types of all properties. */
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavBarContainer);
