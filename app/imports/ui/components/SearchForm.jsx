import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Form, Card, Loader, Button } from 'semantic-ui-react';
import MenuItem from '/imports/ui/components/MenuItem';
import { withTracker } from 'meteor/react-meteor-data';
import moment from 'moment';
import PropTypes from 'prop-types';
import { MenuItems } from '../../api/menu/MenuItems';

let active = false;

class SearchForm extends React.Component {

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
      Meteor.subscribe('AllMenuItems');
      // console.log('search:', this.state.query);
      return {
        menuitems: MenuItems.find({ name: searchValue }).fetch(),
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

  available = (item) => {
    // eslint-disable-next-line radix
    let start = moment().hour(parseInt(item.starting) - 1);
    if (item.startingPeriod === 'PM') {
      // eslint-disable-next-line radix
      start = moment().hour(parseInt(item.starting) + 12);
    }
    // console.log(start);
    // eslint-disable-next-line radix
    let end = moment().hour(parseInt(item.ending) - 1);
    if (item.endingPeriod === 'PM') {
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

  renderPage() {
    return (
        <div>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Input placeholder='Search...' value={this.state.query} onChange={this.handleInputChange} width={4}/>
          <br/>
        </Form>
          <Button onClick={this.wasClicked}>
            Food Available Now
          </Button>
          <br/>
          <br/>
          {active === true ? (
              <Card.Group itemsPerRow={3}>
                {this.props.menuitems.filter(this.available, this.searchItems).map((menuitems, index) => <MenuItem
                    key={index} menuitems={menuitems} />)}
              </Card.Group>
          ) : ''}
          {active === false ? (
              <Card.Group itemsPerRow={3}>
                {this.props.menuitems.filter(this.searchItems).map((menuitems, index) => <MenuItem
                    key={index} menuitems={menuitems} />)}
              </Card.Group>
          ) : ''}
        </div>
    );
  }
}

SearchForm.propTypes = {
  menuitems: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('AllMenuItems');
  return {
    menuitems: MenuItems.find({}).fetch(),
    ready: subscription.ready(),
  };
})(SearchForm);
