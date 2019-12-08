import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Divider, Card, Button } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Reviews } from '../../api/review/Reviews';
import ReviewItem from '../components/ReviewItem';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListReviews extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <div className="peach">
          <Container>
            <Header as="h2" textAlign="center" className="Montserrat">Reviews</Header>
            <Divider/>
            <Button color='black'>
              <Link className='review-button' to={`/addReview/${this.props.id}`}>Add a Review</Link>
            </Button>
            <br/>
            <br/>
            <Card.Group itemsPerRow={3}>
              {this.props.reviews.map((reviewitems, index) => <ReviewItem key={index} ReviewItems={reviewitems} />)}
            </Card.Group>
          </Container>
          <br/>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListReviews.propTypes = {
  reviews: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get access to Stuff documents.
  const documentId = match.params._id;
  // console.log(documentId);
  const subscription = Meteor.subscribe('Reviews');
  return {
    reviews: Reviews.find({ menuId: documentId }).fetch(),
    id: documentId,
    ready: subscription.ready(),
  };
})(ListReviews);
