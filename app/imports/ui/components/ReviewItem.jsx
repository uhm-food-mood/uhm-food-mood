import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class ReviewItem extends React.Component {

  render() {
    return (
        <Card>
          <Card.Content>
            <Card.Meta>
              {this.props.ReviewItems.owner}
            </Card.Meta>
            <Card.Description>
              {this.props.ReviewItems.description}
            </Card.Description>
            <Card.Description>
              {this.props.ReviewItems.rating}
            </Card.Description>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
ReviewItem.propTypes = {
  ReviewItems: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(ReviewItem);
