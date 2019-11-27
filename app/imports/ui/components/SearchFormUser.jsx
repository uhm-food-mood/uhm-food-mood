import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Form, Card, Loader } from 'semantic-ui-react';
import FavoriteItem from '/imports/ui/components/FavoriteItem';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Favorites } from '../../api/favorite/Favorites';

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
    if (this.state.query.toLowerCase().includes(item.name.toLowerCase())) {
      return true;
    }
    if (this.state.query.toLowerCase().includes(item.vendor.toLowerCase())) {
      return true;
    }
    if (this.state.query.toLowerCase().includes(item.ethnicity.toLowerCase())) {
      return true;
    }
    if (this.state.query.toLowerCase() === 'vegan' && item.vegan === 'yes') {
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
        <Form>
          <Form.Input placeholder='Search...' value={this.state.query} onChange={this.handleInputChange} width={4}/>
          <br/>
        </Form>
          <Card.Group itemsPerRow={3}>
            {this.props.menuitems.filter(this.searchItems).map((FavoriteItems, index) => <FavoriteItem key={index}
                          FavoriteItems={FavoriteItems} />)}
          </Card.Group>
        </div>
    );
  }
}

SearchFormUser.propTypes = {
  menuitems: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Favorites');
  return {
    menuitems: Favorites.find({}).fetch(),
    ready: subscription.ready(),
  };
})(SearchFormUser);
