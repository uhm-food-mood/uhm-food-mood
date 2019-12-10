import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Divider, Message } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Favorites } from '../../api/favorite/Favorites';
import SearchFormUser from '../components/SearchFormUser';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListMenuItems extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <div className="peach">
        <Container>
          <Header as="h2" textAlign="center" className="Montserrat">YOUR FAVORITES</Header>
          <Divider inverted/>
          <Message>
            <Message.Header>Tips for Searching</Message.Header>
            <p>Search for food below.</p>
            <ul>
              <li>
                You can search by name, vendor, and style (ex. Chinese).
              </li>
              <li>
                You can also search for vegan food by searching &#39;vegan&#39;.
              </li>
              <li>
                Click the &#39;Food Available Now&#39; button to see food available right now.
              </li>
            </ul>
          </Message>
          <SearchFormUser />
          <br/>
        </Container>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListMenuItems.propTypes = {
  menuitems: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Favorites');
  return {
    menuitems: Favorites.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListMenuItems);
