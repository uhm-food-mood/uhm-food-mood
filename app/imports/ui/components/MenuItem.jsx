import React from 'react';
import { Card, Image, Label, Icon, Button, Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import moment from 'moment';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import { Favorites } from '../../api/favorite/Favorites';
import { Reviews } from '../../api/review/Reviews';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */

function available(starting, startingPeriod, ending, endingPeriod, startingDay, endingDay) {
  // eslint-disable-next-line radix
  let start = moment().hour(parseInt(starting) - 1);
  if (startingPeriod === 'PM') {
    // eslint-disable-next-line radix
    start = moment().hour(parseInt(starting) + 12);
  }
  // console.log(start);
  // eslint-disable-next-line radix
  let end = moment().hour(parseInt(ending) - 1);
  if (endingPeriod === 'PM') {
    // eslint-disable-next-line radix
    end = moment().hour(parseInt(ending) + 12);
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

class MenuItem extends React.Component {

  isFavorited() {
    if (Favorites.findOne({ MenuId: this.props.menuitems._id })) {
      // console.log(Favorites.findOne({ MenuId: this.props.menuitems._id }));
      return true;
    }
    return false;
  }

  favorite() {
    // console.log(this.props.menuitems.name);
    // console.log(this.props.menuitems._id);
    const name = this.props.menuitems.name;
    const image = this.props.menuitems.image;
    const vendor = this.props.menuitems.vendor;
    const price = this.props.menuitems.price;
    const availableStart = this.props.menuitems.availableStart;
    const availableEnd = this.props.menuitems.availableEnd;
    const starting = this.props.menuitems.starting;
    const startingPeriod = this.props.menuitems.startingPeriod;
    const ending = this.props.menuitems.ending;
    const endingPeriod = this.props.menuitems.endingPeriod;
    const vegan = this.props.menuitems.vegan;
    const ethnicity = this.props.menuitems.ethnicity;
    const MenuId = this.props.menuitems._id;
    const owner = Meteor.user().username;
    Favorites.insert({
          name,
          image,
          vendor,
          price,
          availableStart,
          availableEnd,
          starting,
          startingPeriod,
          ending,
          endingPeriod,
          vegan,
          ethnicity,
          owner,
          MenuId,
        },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Added to favorites!', 'success');
            this.forceUpdate();
          }
        });
  }

  removeFavorite() {
    swal({
      title: 'Are you sure?',
      text: 'It will disappear from your Favorites page, but you can re-favorite at any time in the Food Options page!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
        .then((willDelete) => {
          if (willDelete) {
            Favorites.remove(Favorites.findOne({ MenuId: this.props.menuitems._id })._id);
            this.forceUpdate();
            swal('Poof! You unfavorited this item!', {
              icon: 'success',
            });
          } else {
            swal('You canceled unfavoriting!');
          }
        });
  }

  average() {
    const total = Reviews.find({ menuId: this.props.menuitems._id }).fetch();
    let average = Object.values(total).reduce((t, { rating }) => t + rating, 0);
    // console.log(average);
    const length = Reviews.find({ menuId: this.props.menuitems._id }).fetch().length;
    // console.log(length);
    average /= length;
    // console.log(average);
    return average;
  }

  checkRating() {
    if (Reviews.find({ menuId: this.props.menuitems._id }).fetch().length > 0) {
      // console.log('checked');
      return true;
    }
    // console.log('unchecked');
    return false;
  }

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
        <Card>
          <Card.Content>
            <Image
                src={this.props.menuitems.image}
                fluid
            />
            <Card.Header>{this.props.menuitems.name}</Card.Header>
            <Card.Meta>{this.props.menuitems.vendor} - ${this.props.menuitems.price}</Card.Meta>
              {this.checkRating() && this.average() > 0 && this.average() <= 1 ? (
                  <Card.Description>
                    <Icon name='star' />
                  <Icon name='star outline' />
                  <Icon name='star outline' />
                <Icon name='star outline' />
                <Icon name='star outline' />
                </Card.Description>
              ) : ''}
            {this.checkRating() && this.average() > 1 && this.average() <= 2 ? (
                <Card.Description>
                  <Icon name='star' />
                  <Icon name='star' />
                  <Icon name='star outline' />
                  <Icon name='star outline' />
                  <Icon name='star outline' />
                </Card.Description>
            ) : ''}
            {this.checkRating() && this.average() > 2 && this.average() <= 3 ? (
                <Card.Description>
                  <Icon name='star' />
                  <Icon name='star' />
                  <Icon name='star' />
                  <Icon name='star outline' />
                  <Icon name='star outline' />
                </Card.Description>
            ) : ''}
            {this.checkRating() && this.average() > 3 && this.average() <= 4 ? (
                <Card.Description>
                  <Icon name='star' />
                  <Icon name='star' />
                  <Icon name='star' />
                  <Icon name='star' />
                  <Icon name='star outline' />
                </Card.Description>
            ) : ''}
            {this.checkRating() && this.average() > 4 && this.average() <= 5 ? (
                <Card.Description>
                  <Icon name='star' />
                  <Icon name='star' />
                  <Icon name='star' />
                  <Icon name='star' />
                  <Icon name='star' />
                </Card.Description>
            ) : ''}
            {!this.checkRating() ? (
                <Card.Description>
                  <Icon name='star outline' />
                  <Icon name='star outline' />
                  <Icon name='star outline' />
                  <Icon name='star outline' />
                  <Icon name='star outline' />
                </Card.Description>
            ) : ''}
            <Card.Description>
              {this.props.menuitems.availableStart} - {this.props.menuitems.availableEnd}
            </Card.Description>
            <Card.Description>{this.props.menuitems.starting}:00 {this.props.menuitems.startingPeriod} -
              {this.props.menuitems.ending}:00 {this.props.menuitems.endingPeriod}
            </Card.Description>
            {available(this.props.menuitems.starting,
                this.props.menuitems.startingPeriod,
                this.props.menuitems.ending,
                this.props.menuitems.endingPeriod,
                this.props.menuitems.availableStart,
                this.props.menuitems.availableEnd) ? (
                <Card.Description className="green">
                  Available now!
                </Card.Description>
            ) : ''}
            {Meteor.user() && !this.isFavorited() ? (
                <Button color='grey' icon onClick={() => this.favorite()}>
                  <Icon name='heart'/>
                </Button>
            ) : ''}
            {Meteor.user() && this.isFavorited() ? (
                <Button color='red' icon onClick={() => this.removeFavorite()}>
                  <Icon name='heart'/>
                </Button>
            ) : '' }
            {this.props.menuitems.ethnicity === 'Japanese' ? (
                <Label color='red'>Japanese</Label>
            ) : ''}
            {this.props.menuitems.ethnicity === 'Chinese' ? (
                <Label color='orange'>Chinese</Label>
            ) : ''}
            {this.props.menuitems.ethnicity === 'French' ? (
                <Label color='yellow'>French</Label>
            ) : ''}
            {this.props.menuitems.ethnicity === 'American' ? (
                <Label color='brown'>American</Label>
            ) : ''}
            {this.props.menuitems.ethnicity === 'Thai' ? (
                <Label color='teal'>Thai</Label>
            ) : ''}
            {this.props.menuitems.ethnicity === 'Mediterranean' ? (
                <Label color='blue'>Mediterranean</Label>
            ) : ''}
            {this.props.menuitems.ethnicity === 'Middle Eastern' ? (
                <Label color='violet'>Middle Eastern</Label>
            ) : ''}
            {this.props.menuitems.ethnicity === 'Indian' ? (
                <Label color='purple'>Indian</Label>
            ) : ''}
            {this.props.menuitems.ethnicity === 'Mexican' ? (
                <Label color='pink'>Mexican</Label>
            ) : ''}
            {this.props.menuitems.ethnicity === 'Hawaiian' ? (
                <Label color='green'>Hawaiian</Label>
            ) : ''}
            {this.props.menuitems.ethnicity === 'Korean' ? (
                <Label color='black'>Korean</Label>
            ) : ''}
            {this.props.menuitems.ethnicity === 'Vietnamese' ? (
                <Label color='grey'>Vietnamese</Label>
            ) : ''}
            {this.props.menuitems.ethnicity === 'Brazilian' ? (
                <Label color='olive'>Brazilian</Label>
            ) : ''}
            {this.props.menuitems.vegan === 'yes' ? (
                <Label color='green'>Vegan</Label>
            ) : ''}
          </Card.Content>
          <Card.Content extra>
            <Link to={`/review/${this.props.menuitems._id}`}>See Reviews</Link>
            {Meteor.user() ? (
                <Button color='black' floated='right'>
                  <Link className='review-button' to={`/addReview/${this.props.menuitems._id}`}>Add a Review</Link>
                </Button>
            ) : ''}
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
MenuItem.propTypes = {
  menuitems: PropTypes.object.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withTracker(() => {
  // console.log(documentId);
  const subscription = Meteor.subscribe('Favorites');
  const subscription2 = Meteor.subscribe('Reviews');
  return {
    ready: subscription.ready() && subscription2.ready(),
  };
})(MenuItem);
