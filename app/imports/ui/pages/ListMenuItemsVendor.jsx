import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MenuItems } from '../../api/menu/MenuItems';
import SearchFormVendor from '../components/SearchFormVendor';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListMenuItemsVendor extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <div className="foodmoodbg">
        <Container>
          <Header inverted as="h2" textAlign="center" className="Montserrat">Menu Item Listings</Header>
          <SearchFormVendor />
          <br/>
          <Link to={'/add/'} className="add">Add Another +</Link>
        </Container>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListMenuItemsVendor.propTypes = {
  menuitems: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('MenuItems');
  return {
    menuitems: MenuItems.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListMenuItemsVendor);
