import React from 'react';
import { Container, Card, Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import VendorCard from '../components/VendorCard';
import { Vendors } from '../../api/vendor/Vendors';

/** A simple static component to render some text for the landing page. */
class FoodListings extends React.Component {
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
        <div className='foodlistingsbg'>
          <Container>
            <h1 className='foodlisting-landing'>PLACES TO EAT</h1>
            <Card.Group itemsPerRow={3}>
              {this.props.vendors.map((vendors, index) => <VendorCard
                  key={index} vendors={vendors} />)}
            </Card.Group>
            <br/>
          </Container>
        </div>
    );
  }
}

FoodListings.propTypes = {
  vendors: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  // console.log(documentId);
  const subscription = Meteor.subscribe('Vendors');
  return {
    vendors: Vendors.find({}).fetch(),
    ready: subscription.ready(),
  };
})(FoodListings);
