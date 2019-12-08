import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Form, Table, Loader, Button } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Roles } from 'meteor/alanning:roles';
import { Link } from 'react-router-dom';
import { MenuItems } from '../../api/menu/MenuItems';
import MenuTableAdmin from './MenuTableAdmin';

class SearchFormAdmin extends React.Component {

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
          <Button color='black' floated='right'>
            <Link className='review-button' to={'/add/'}>Add Menu Item</Link>
          </Button>
          <br/>
          <br/>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Food Name</Table.HeaderCell>
                {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
                    <Table.HeaderCell>Vendor</Table.HeaderCell>
                ) : ''}
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell>Availability</Table.HeaderCell>
                <Table.HeaderCell>Availability times</Table.HeaderCell>
                <Table.HeaderCell>Style</Table.HeaderCell>
                <Table.HeaderCell>Edit</Table.HeaderCell>
                <Table.HeaderCell>Remove</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.menuitems.filter(this.searchItems).map((menuitems) => <MenuTableAdmin key={menuitems._id}
                                                                                             menuitems={menuitems} />)}
            </Table.Body>
          </Table>
        </div>
    );
  }
}

SearchFormAdmin.propTypes = {
  menuitems: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('MenuItemsAdmin');
  return {
    menuitems: MenuItems.find({}).fetch(),
    ready: subscription.ready(),
  };
})(SearchFormAdmin);
