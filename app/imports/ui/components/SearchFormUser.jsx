import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Form, Card, Loader, Button } from 'semantic-ui-react';
import FavoriteItem from '/imports/ui/components/FavoriteItem';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Favorites } from '../../api/favorite/Favorites';
import { Reviews } from '../../api/review/Reviews';

let active = false;
let sorted = false;

class SearchFormUser extends React.Component {

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
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
    if (item.ethnicity.toLowerCase().includes(this.state.query.toLowerCase())) {
      return true;
    }
    if (this.state.query.toLowerCase() === 'vegan' && item.vegan === 'yes') {
      return true;
    }
    const nameVendor = `${item.name} ${item.vendor}`;
    const vendorName = `${item.vendor} ${item.name}`;
    if (nameVendor.toLowerCase().includes(this.state.query.toLowerCase())
        || vendorName.toLowerCase().includes(this.state.query.toLowerCase())) {
      return true;
    }
    const nameEthnic = `${item.name} ${item.ethnicity}`;
    const EthnicName = `${item.ethnicity} ${item.name}`;
    if (nameEthnic.toLowerCase().includes(this.state.query.toLowerCase())
        || EthnicName.toLowerCase().includes(this.state.query.toLowerCase())) {
      return true;
    }
    const vendorEthnic = `${item.vendor} ${item.ethnicity}`;
    const ethnicVendor = `${item.ethnicity} ${item.vendor}`;
    if (vendorEthnic.toLowerCase().includes(this.state.query.toLowerCase())
        || ethnicVendor.toLowerCase().includes(this.state.query.toLowerCase())) {
      return true;
    }
    if (this.state.query === '') {
      return true;
    }
    return false;
  }

  wasClicked = () => {
    if (active === true) {
      active = false;
      // console.log(false);
      this.forceUpdate();
      return active;
    }
    if (active === false) {
      // console.log(true);
      active = true;
    }
    this.forceUpdate();
    return active;
  }

  isSorted = () => {
    if (sorted === true) {
      sorted = false;
      this.forceUpdate();
      return sorted;
    }
    if (sorted === false) {
      sorted = true;
    }
    this.forceUpdate();
    return sorted;
  }

  renderPage() {
    return (
        <div>
        <Form>
          <Form.Input placeholder='Search...' value={this.state.query} onChange={this.handleInputChange} width={4}/>
          <br/>
        </Form>
          {!active ? (
              <Button onClick={this.wasClicked}>
                Food Available Now
              </Button>
          ) : '' }
          {active ? (
              <Button color='green' onClick={this.wasClicked}>
                Food Available Now
              </Button>
          ) : '' }
          {!sorted ? (
              <Button onClick={this.isSorted}>
                Sort by rating
              </Button>
          ) : '' }
          {sorted ? (
              <Button color='green' onClick={this.isSorted}>
                Sort by rating
              </Button>
          ) : '' }
          <br/>
          <br/>
          {active === true && sorted === false ? (
            <Card.Group itemsPerRow={3}>
            {this.props.availableitems.filter(this.searchItems).map((FavoriteItems, index) => <FavoriteItem
                key={index} FavoriteItems={FavoriteItems} />)}
            </Card.Group>
          ) : ''}
          {active === false && sorted === false ? (
              <Card.Group itemsPerRow={3}>
                {this.props.menuitems.filter(this.searchItems).map((FavoriteItems, index) => <FavoriteItem
                    key={index} FavoriteItems={FavoriteItems} />)}
              </Card.Group>
          ) : ''}
          {active === false && sorted === true ? (
              <Card.Group itemsPerRow={3}>
                {this.props.sorteditems.filter(this.searchItems).map((FavoriteItems, index) => <FavoriteItem
                    key={index} FavoriteItems={FavoriteItems} />)}
              </Card.Group>
          ) : ''}
          {active === true && sorted === true ? (
              <Card.Group itemsPerRow={3}>
                {this.props.sortedAvailableItems.filter(this.searchItems).map((FavoriteItems, index) => <FavoriteItem
                    key={index} FavoriteItems={FavoriteItems} />)}
              </Card.Group>
          ) : ''}
        </div>
    );
  }
}

SearchFormUser.propTypes = {
  menuitems: PropTypes.array.isRequired,
  availableitems: PropTypes.array.isRequired,
  sorteditems: PropTypes.array.isRequired,
  sortedAvailableItems: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  function available(item) {
    // eslint-disable-next-line radix
    let start = moment().hour(parseInt(item.starting) - 1);
    if (item.startingPeriod === 'PM' && item.starting !== 12) {
      // eslint-disable-next-line radix
      start = moment().hour(parseInt(item.starting) + 12);
    }
    // console.log(start);
    // eslint-disable-next-line radix
    let end = moment().hour(parseInt(item.ending) - 1);
    if (item.endingPeriod === 'PM' && item.ending !== 12) {
      // eslint-disable-next-line radix
      end = moment().hour(parseInt(item.ending) + 12);
    }
    const startDay = moment(`${item.availableStart} 0`, 'dddd hh');
    const endDay = moment(`${item.availableEnd} 23:59`, 'dddd hh:mm');
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
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Favorites');
  const subscription2 = Meteor.subscribe('Reviews');
  const menu = Favorites.find({}).fetch();
  const sortedMenu = menu.sort(function (a, b) {
    const first = a;
    const total1 = Reviews.find({ menuId: first.MenuId }).fetch();
    let average1 = Object.values(total1).reduce((t, { rating }) => t + rating, 0);
    // console.log(average);
    const length = Reviews.find({ menuId: first.MenuId }).fetch().length;
    // console.log(length);
    average1 /= length;
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(average1)) {
      average1 = 0;
    }
    // console.log(`average1: ${average1}`);
    const second = b;
    const total2 = Reviews.find({ menuId: second.MenuId }).fetch();
    let average2 = Object.values(total2).reduce((t, { rating }) => t + rating, 0);
    // console.log(average);
    const length2 = Reviews.find({ menuId: second.MenuId }).fetch().length;
    // console.log(length);
    average2 /= length2;
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(average2)) {
      average2 = 0;
    }
    // console.log(`average2: ${average2}`);
    return average2 - average1;
  });
  return {
    menuitems: Favorites.find({}).fetch(),
    availableitems: menu.filter(available),
    sorteditems: sortedMenu,
    sortedAvailableItems: sortedMenu.filter(available),
    ready: subscription.ready() && subscription2.ready(),
  };
})(SearchFormUser);
