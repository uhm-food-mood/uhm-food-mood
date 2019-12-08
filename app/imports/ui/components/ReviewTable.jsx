import React from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List reviews table. See pages/Listreviews.jsx. */
class ReviewTable extends React.Component {
  removeItem(docID) {
    this.props.Reviews.remove(docID);
  }

  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.review.rating}</Table.Cell>
          <Table.Cell>{this.props.review.description}</Table.Cell>
          <Table.Cell>
            <Link to={`/editReview/${this.props.review._id}`}>Edit</Link>
          </Table.Cell>
          <Table.Cell><Button icon onClick={() => this.removeItem(this.props.review._id)}>
            <Icon name='trash' />
          </Button></Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
ReviewTable.propTypes = {
  review: PropTypes.object.isRequired,
  Reviews: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(ReviewTable);
