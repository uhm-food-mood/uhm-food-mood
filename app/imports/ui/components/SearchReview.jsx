import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Form, Loader, Table } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Reviews } from '../../api/review/Reviews';
import ReviewTable from './ReviewTable';

class SearchReview extends React.Component {

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  handleFormSubmit = () => {
    const searchValue = this.state.query;

    if (searchValue) {
      Meteor.subscribe('UserReviews');
      // console.log('search:', this.state.query);
      return {
        reviews: Reviews.find({ name: searchValue }).fetch(),
      };
      }
    return null;
    }

  handleInputChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  }

  searchItems = (item) => {
    if (item.name.toLowerCase().includes(this.state.query.toLowerCase())) {
      return true;
    }
    if (item.vendor.toLowerCase().includes(this.state.query.toLowerCase())) {
      return true;
    }
    const nameVendor = `${item.name} ${item.vendor}`;
    const vendorName = `${item.vendor} ${item.name}`;
    if (nameVendor.toLowerCase().includes(this.state.query.toLowerCase())
        || vendorName.toLowerCase().includes(this.state.query.toLowerCase())) {
      return true;
    }
    if (this.state.query === '') {
      return true;
    }
    return false;
  }

  renderPage() {
    return (
        <div>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Input placeholder='Search...' value={this.state.query} onChange={this.handleInputChange} width={4}/>
          <br/>
        </Form>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Vendor</Table.HeaderCell>
                <Table.HeaderCell>Rating</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
                <Table.HeaderCell>Edit</Table.HeaderCell>
                <Table.HeaderCell>Remove</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.reviews.filter(this.searchItems).map((review) => <ReviewTable key={review._id}
                                                               review={review} Reviews={Reviews}/>)}
            </Table.Body>
          </Table>
        </div>
    );
  }
}

SearchReview.propTypes = {
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
})(SearchReview);
