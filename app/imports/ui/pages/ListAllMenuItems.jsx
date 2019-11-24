import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Card, Header, Loader, Search, Divider } from 'semantic-ui-react';
import MenuItem from '/imports/ui/components/MenuItem';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { MenuItems } from '../../api/menu/MenuItems';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListAllMenuItems extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <div className="foodmoodbg">
        <Container>
          <Header inverted as="h2" textAlign="center" className="Montserrat">All Food Options</Header>
          <Divider/>
          <div className="center">
          <Search />
          <br/>
          </div>
          <Card.Group itemsPerRow={3}>
            {this.props.menuitems.map((menuitems, index) => <MenuItem key={index} menuitems={menuitems} />)}
          </Card.Group>
          <br/>
        </Container>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListAllMenuItems.propTypes = {
  menuitems: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('AllMenuItems');
  return {
    menuitems: MenuItems.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListAllMenuItems);
