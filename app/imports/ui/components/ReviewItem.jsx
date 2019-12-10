import React from 'react';
import { Button, Card, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import swal from 'sweetalert';
import { Reviews } from '../../api/review/Reviews';

class ReviewItem extends React.Component {

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
            Reviews.remove(docID);
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
        <Card>
          <Card.Content>
            <Card.Meta>
              {this.props.ReviewItems.owner}
            </Card.Meta>
            {this.props.ReviewItems.rating === 1 ? (
                <Card.Description>
                  <Icon name='star' />
                  <Icon name='star outline' />
                  <Icon name='star outline' />
                  <Icon name='star outline' />
                  <Icon name='star outline' />
                </Card.Description>
            ) : ''}
            {this.props.ReviewItems.rating === 2 ? (
                <Card.Description>
                  <Icon name='star' />
                  <Icon name='star' />
                  <Icon name='star outline' />
                  <Icon name='star outline' />
                  <Icon name='star outline' />
                </Card.Description>
            ) : ''}
            {this.props.ReviewItems.rating === 3 ? (
                <Card.Description>
                  <Icon name='star' />
                  <Icon name='star' />
                  <Icon name='star' />
                  <Icon name='star outline' />
                  <Icon name='star outline' />
                </Card.Description>
            ) : ''}
            {this.props.ReviewItems.rating === 4 ? (
                <Card.Description>
                  <Icon name='star' />
                  <Icon name='star' />
                  <Icon name='star' />
                  <Icon name='star' />
                  <Icon name='star outline' />
                </Card.Description>
            ) : ''}
            {this.props.ReviewItems.rating === 5 ? (
                <Card.Description>
                  <Icon name='star' />
                  <Icon name='star' />
                  <Icon name='star' />
                  <Icon name='star' />
                  <Icon name='star' />
                </Card.Description>
            ) : ''}
            <Card.Description>
              {this.props.ReviewItems.description}
            </Card.Description>
            {Meteor.userId() !== null && this.props.ReviewItems.owner === Meteor.user().username ? (
                <div>
                <Card.Content extra>
                  <Button>
                  <Link className='black' floated='left' to= {`/editReview/${this.props.ReviewItems._id}`}>Edit</Link>
                  </Button>
                  <Button color='red' floated='right' onClick={() => this.removeItem(this.props.ReviewItems._id)}>
                    Remove
                  </Button>
                </Card.Content>
                </div>
            ) : ''}
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
