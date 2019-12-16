import React from 'react';
import { Card, Image, Label, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import moment from 'moment';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import { Favorites } from '../../api/favorite/Favorites';
import { Reviews } from '../../api/review/Reviews';


function available(starting, startingPeriod, ending, endingPeriod, startingDay, endingDay) {
  // eslint-disable-next-line radix
  let start = moment().hour(parseInt(starting) - 1);
  if (startingPeriod === 'PM') {
    // eslint-disable-next-line radix
    start = moment().hour(parseInt(starting) + 12 && starting !== 12);
  }
  // console.log(start);
  // eslint-disable-next-line radix
  let end = moment().hour(parseInt(ending) - 1);
  if (endingPeriod === 'PM') {
    // eslint-disable-next-line radix
    end = moment().hour(parseInt(ending) + 12 && ending !== 12);
  }
  const startDay = moment(`${startingDay} 0`, 'dddd hh');
  const endDay = moment(`${endingDay} 23:59`, 'dddd hh:mm');
  // console.log(startDay);
  // console.log(endDay);
  // console.log(end);
  if (moment().isBefore(end) && moment().isAfter(start) && moment().isBefore(endDay) && moment().isAfter(startDay)) {
    // console.log(true);
    return true;
  }
  // console.log(false);
  return false;
}

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class FavoriteItem extends React.Component {

  removeItem(docID) {
    swal({
      title: 'Are you sure?',
      text: 'It will disappear from your Favorites page, but you can re-favorite at any time in the Food Options page!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
        .then((willDelete) => {
          if (willDelete) {
            Favorites.remove(docID);
            swal('Poof! You unfavorited this item!', {
              icon: 'success',
            });
          } else {
            swal('You canceled unfavoriting!');
          }
        });
  }

  average() {
    const total = Reviews.find({ menuId: this.props.FavoriteItems.MenuId }).fetch();
    let average = Object.values(total).reduce((t, { rating }) => t + rating, 0);
    // console.log(average);
    const length = Reviews.find({ menuId: this.props.FavoriteItems.MenuId }).fetch().length;
    // console.log(length);
    average /= length;
    // console.log(average);
    return average;
  }

  checkRating() {
    if (Reviews.find({ menuId: this.props.FavoriteItems.MenuId }).fetch().length > 0) {
      // console.log('checked');
      return true;
    }
    // console.log('unchecked');
    return false;
  }

  render() {
    return (
        <Card>
          <Card.Content>
            <Image
                src={this.props.FavoriteItems.image}
                fluid
            />
            <Card.Header>{this.props.FavoriteItems.name}</Card.Header>
            <Card.Meta>{this.props.FavoriteItems.vendor} - ${this.props.FavoriteItems.price}</Card.Meta>
            {this.checkRating() && this.average() > 0 && this.average() <= 1 ? (
                <Card.Description>
                  <Icon name='star' className='noHover'/>
                  <Icon name='star outline' className='noHover' />
                  <Icon name='star outline' className='noHover'/>
                  <Icon name='star outline' className='noHover'/>
                  <Icon name='star outline' className='noHover'/>
                </Card.Description>
            ) : ''}
            {this.checkRating() && this.average() > 1 && this.average() <= 2 ? (
                <Card.Description>
                  <Icon name='star' className='noHover' />
                  <Icon name='star' className='noHover'/>
                  <Icon name='star outline' className='noHover'/>
                  <Icon name='star outline' className='noHover'/>
                  <Icon name='star outline' className='noHover'/>
                </Card.Description>
            ) : ''}
            {this.checkRating() && this.average() > 2 && this.average() <= 3 ? (
                <Card.Description>
                  <Icon name='star' className='noHover'/>
                  <Icon name='star' className='noHover'/>
                  <Icon name='star' className='noHover'/>
                  <Icon name='star outline' className='noHover'/>
                  <Icon name='star outline' className='noHover' />
                </Card.Description>
            ) : ''}
            {this.checkRating() && this.average() > 3 && this.average() <= 4 ? (
                <Card.Description>
                  <Icon name='star' className='noHover'/>
                  <Icon name='star' className='noHover'/>
                  <Icon name='star' className='noHover'/>
                  <Icon name='star' className='noHover'/>
                  <Icon name='star outline' className='noHover'/>
                </Card.Description>
            ) : ''}
            {this.checkRating() && this.average() > 4 && this.average() <= 5 ? (
                <Card.Description>
                  <Icon name='star' className='noHover'/>
                  <Icon name='star' className='noHover'/>
                  <Icon name='star' className='noHover'/>
                  <Icon name='star' className='noHover'/>
                  <Icon name='star' className='noHover'/>
                </Card.Description>
            ) : ''}
            {!this.checkRating() ? (
                <Card.Description>
                  <Icon name='star outline' className='noHover'/>
                  <Icon name='star outline' className='noHover'/>
                  <Icon name='star outline' className='noHover'/>
                  <Icon name='star outline' className='noHover'/>
                  <Icon name='star outline' className='noHover'/>
                </Card.Description>
            ) : ''}
            <Card.Description>
              {this.props.FavoriteItems.availableStart} - {this.props.FavoriteItems.availableEnd}
            </Card.Description>
            <Card.Description>{this.props.FavoriteItems.starting}:00 {this.props.FavoriteItems.startingPeriod} -
              {this.props.FavoriteItems.ending}:00 {this.props.FavoriteItems.endingPeriod}
            </Card.Description>
            {available(this.props.FavoriteItems.starting,
                this.props.FavoriteItems.startingPeriod,
                this.props.FavoriteItems.ending,
                this.props.FavoriteItems.endingPeriod,
                this.props.FavoriteItems.availableStart,
                this.props.FavoriteItems.availableEnd) ? (
                <Card.Description className="green">
                  Available now!
                </Card.Description>
            ) : ''}
            <Label color='red'>{this.props.FavoriteItems.ethnicity}</Label>
            {this.props.FavoriteItems.vegan === 'yes' ? (
              <Label color='green'>Vegan</Label>
            ) : ''}
            <Button color='red' floated='right' icon onClick={() => this.removeItem(this.props.FavoriteItems._id)}>
              Remove
            </Button>
          </Card.Content>
          <Card.Content extra>
            <Link to={`/review/${this.props.FavoriteItems.MenuId}`}>See Reviews</Link>
            <Button color='black' floated='right'>
              <Link className='review-button' to={`/addReview/${this.props.FavoriteItems.MenuId}`}>Add a Review</Link>
            </Button>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
FavoriteItem.propTypes = {
  FavoriteItems: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withTracker(() => {
  // console.log(documentId);
  const subscription = Meteor.subscribe('Favorites');
  const subscription2 = Meteor.subscribe('Reviews');
  return {
    ready: subscription.ready() && subscription2.ready(),
  };
})(FavoriteItem);
