import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Divider } from 'semantic-ui-react';
import { Reviews } from '/imports/api/review/Reviews';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import SearchReviewAdmin from '../components/SearchReviewAdmin';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListTableReviewsAdmin extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <div className="peach">
        <Container>
          <Header as="h2" textAlign="center" className="Montserrat">ALL REVIEWS</Header>
          <Divider/>
          <SearchReviewAdmin/>
          <br/>
        </Container>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListTableReviewsAdmin.propTypes = {
  reviews: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Reviews');
  return {
    reviews: Reviews.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListTableReviewsAdmin);
