import React from 'react';
import { Card, Image, Label, Icon, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import moment from 'moment';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import { Favorites } from '../../api/favorite/Favorites';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */

function available(starting, startingPeriod, ending, endingPeriod) {
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
  // console.log(end);
  if (moment().isBefore(end) && moment().isAfter(start)) {
    // console.log(true);
    return true;
  }
  // console.log(false);
  return false;
}

class MenuItem extends React.Component {

  favorite() {
    // console.log(this.props.menuitems.name);
    // console.log(this.props.menuitems._id);
    const name = this.props.menuitems.name;
    const image = this.props.menuitems.image;
    const vendor = this.props.menuitems.vendor;
    const price = this.props.menuitems.price;
    const availability = this.props.menuitems.availability;
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
          availability,
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
          }
        });
  }

  render() {
    return (
        <Card>
          <Card.Content>
            <Image
                src={this.props.menuitems.image}
                fluid
            />
            <Card.Header>{this.props.menuitems.name}</Card.Header>
            <Card.Meta>{this.props.menuitems.vendor} - ${this.props.menuitems.price}</Card.Meta>
            <Card.Description>{this.props.menuitems.availability}</Card.Description>
            <Card.Description>{this.props.menuitems.starting}:00 {this.props.menuitems.startingPeriod} -
              {this.props.menuitems.ending}:00 {this.props.menuitems.endingPeriod}
            </Card.Description>
            {available(this.props.menuitems.starting,
                this.props.menuitems.startingPeriod,
                this.props.menuitems.ending,
                this.props.menuitems.endingPeriod) ? (
                <Card.Description className="green">
                  Available now!
                </Card.Description>
            ) : ''}
            { Meteor.user() ? (
                <Button icon onClick={() => this.favorite()}>
                  <Icon name='heart'/>
                </Button>
            ) : ''}
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
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
MenuItem.propTypes = {
  menuitems: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(MenuItem);
