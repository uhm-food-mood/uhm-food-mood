import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Card, Header, Loader, Divider } from 'semantic-ui-react';
import MenuItem from '/imports/ui/components/MenuItem';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { MenuItems } from '../../api/menu/MenuItems';
import SearchForm from '../components/SearchForm';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class SearchResults extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <div className="foodmoodbg">
          <Container>
            <Header inverted as="h2" textAlign="center" className="Montserrat">Search Results</Header>
            <Divider/>
            <div className="right">
              <SearchForm />
            </div>
            <div className="center">
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
SearchResults.propTypes = {
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
})(SearchResults);
