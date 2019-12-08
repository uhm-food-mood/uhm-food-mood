import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Form, Table, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import AccountTableAdmin from './AccountTableAdmin';

class SearchFormAccountsAdmin extends React.Component {

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
      Meteor.subscribe('Users');
      // console.log('search:', this.state.query);
      return {
        accounts: Meteor.users.find({ name: searchValue }).fetch(),
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
    if (item.username.toLowerCase().includes(this.state.query.toLowerCase())) {
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
                <Table.HeaderCell>Username</Table.HeaderCell>
                <Table.HeaderCell>Admin?</Table.HeaderCell>
                <Table.HeaderCell>Vendor?</Table.HeaderCell>
                <Table.HeaderCell>Add as Admin</Table.HeaderCell>
                <Table.HeaderCell>Add as Vendor</Table.HeaderCell>
                <Table.HeaderCell>Remove</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.accounts.filter(this.searchItems).map((accounts) => <AccountTableAdmin key={accounts._id}
                                                                                             accounts={accounts} />)}
            </Table.Body>
          </Table>
        </div>
    );
  }
}

SearchFormAccountsAdmin.propTypes = {
  accounts: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Users');
  return {
    accounts: Meteor.users.find({}).fetch(),
    ready: subscription.ready(),
  };
})(SearchFormAccountsAdmin);
