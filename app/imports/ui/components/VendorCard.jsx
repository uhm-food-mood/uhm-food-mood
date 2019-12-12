import React from 'react';
import { Image, Card, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';

class VendorCard extends React.Component {
  render() {
    return (
    <Card>
      <Card.Content>
        <Image src={this.props.vendors.image}/>
        <Card.Header>{this.props.vendors.name}</Card.Header>
        <Card.Description>{this.props.vendors.description}</Card.Description>
      </Card.Content>
        <Card.Content extra>
        <Button color='black' floated='right'>
          <Link className='review-button' to={`/vendors/${this.props.vendors._id}`}>See their food options</Link>
        </Button>
        </Card.Content>
    </Card>
  );
  }
}

VendorCard.propTypes = {
  vendors: PropTypes.object.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withTracker(() => {
  // console.log(documentId);
  const subscription = Meteor.subscribe('Vendors');
  return {
    ready: subscription.ready(),
  };
})(VendorCard);
