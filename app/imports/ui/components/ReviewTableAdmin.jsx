import React from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import swal from 'sweetalert';

/** Renders a single row in the List reviews table. See pages/Listreviews.jsx. */
class ReviewTableAdmin extends React.Component {
  removeItem(docID) {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this review!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
        .then((willDelete) => {
          if (willDelete) {
            this.props.Reviews.remove(docID);
            swal('Poof! This review has been deleted!', {
              icon: 'success',
            });
          } else {
            swal('You canceled the deletion!');
          }
        });
  }

  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.review.owner}</Table.Cell>
          <Table.Cell>{this.props.review.name}</Table.Cell>
          <Table.Cell>{this.props.review.vendor}</Table.Cell>
          <Table.Cell>{this.props.review.rating}</Table.Cell>
          <Table.Cell>{this.props.review.description}</Table.Cell>
          <Table.Cell>
            <Link to={`/editReview/${this.props.review._id}`}>Edit</Link>
          </Table.Cell>
          <Table.Cell><Button negative icon onClick={() => this.removeItem(this.props.review._id)}>
            <Icon name='trash' />
          </Button></Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
ReviewTableAdmin.propTypes = {
  review: PropTypes.object.isRequired,
  Reviews: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(ReviewTableAdmin);
