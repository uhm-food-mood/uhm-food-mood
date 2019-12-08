import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Form, Table, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Favorites } from '../../api/favorite/Favorites';
import MenuTableFavoriteAdmin from './MenuTableFavoriteAdmin';

class SearchFormFavoritesAdmin extends React.Component {

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
      Meteor.subscribe('Allfavorites');
      // console.log('search:', this.state.query);
      return {
        favorites: Favorites.find({ name: searchValue }).fetch(),
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
          <br/>
          <br/>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Owner of Favorite</Table.HeaderCell>
                <Table.HeaderCell>Food Name</Table.HeaderCell>
                <Table.HeaderCell>Vendor</Table.HeaderCell>
                <Table.HeaderCell>Remove</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.favorites.filter(this.searchItems).map((favorites) => <MenuTableFavoriteAdmin
                  key={favorites._id}
                  favorites={favorites} />)}
            </Table.Body>
          </Table>
        </div>
    );
  }
}

SearchFormFavoritesAdmin.propTypes = {
  favorites: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('AllFavorites');
  return {
    favorites: Favorites.find({}).fetch(),
    ready: subscription.ready(),
  };
})(SearchFormFavoritesAdmin);
