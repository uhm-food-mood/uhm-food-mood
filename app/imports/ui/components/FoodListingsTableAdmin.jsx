import React from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { Vendors } from '../../api/vendor/Vendors';

/** Renders a single row in the List accountss table. See pages/Listaccountss.jsx. */

class FoodListingsTableAdmin extends React.Component {
  removeItem(docID) {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this menu item!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
        .then((willDelete) => {
          if (willDelete) {
            Vendors.remove(docID);
            swal('Poof! This menu item has been deleted!', {
              icon: 'success',
            });
          } else {
            swal('You canceled the deletion!');
          }
        });
  }

  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.vendors.owner}</Table.Cell>
          <Table.Cell>{this.props.vendors.name}</Table.Cell>
          <Table.Cell>{this.props.vendors.description}</Table.Cell>
          <Table.Cell><Link to={`/edit/${this.props.vendors._id}`}>Edit</Link></Table.Cell>
          <Table.Cell><Button negative icon onClick={() => this.removeItem(this.props.vendors._id)}>
            <Icon name='trash' />
          </Button></Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
FoodListingsTableAdmin.propTypes = {
  vendors: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */

export default withTracker(() => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Vendors');
  return {
    ready: subscription.ready(),
  };
})(FoodListingsTableAdmin);
