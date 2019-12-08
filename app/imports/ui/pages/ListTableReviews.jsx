import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Divider } from 'semantic-ui-react';
import { Reviews } from '/imports/api/review/Reviews';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import SearchReview from '../components/SearchReview';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListTableReviews extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center" className="Montserrat">YOUR REVIEWS</Header>
          <Divider/>
          <SearchReview/>
          <br/>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListTableReviews.propTypes = {
  reviews: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('UserReviews');
  return {
    reviews: Reviews.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListTableReviews);
