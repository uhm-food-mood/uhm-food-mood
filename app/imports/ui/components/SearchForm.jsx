import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Form, Card, Loader } from 'semantic-ui-react';
import MenuItem from '/imports/ui/components/MenuItem';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { MenuItems } from '../../api/menu/MenuItems';

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

  renderPage() {
    return (
        <div>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Input placeholder='Search...' value={this.state.query} onChange={this.handleInputChange} width={4}/>
          <br/>
        </Form>
          <Card.Group itemsPerRow={3}>
            {this.props.menuitems.filter(this.searchItems).map((menuitems, index) => <MenuItem key={index}
                          menuitems={menuitems} />)}
          </Card.Group>
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
