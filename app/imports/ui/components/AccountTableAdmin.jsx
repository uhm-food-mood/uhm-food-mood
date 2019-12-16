import React from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';
import swal from 'sweetalert';

/** Renders a single row in the List accountss table. See pages/Listaccountss.jsx. */

class AccountTableAdmin extends React.Component {
  removeItem(docID) {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this account!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
        .then((willDelete) => {
          if (willDelete) {
            Meteor.call('deleteUser', docID,
            (error) => {
              if (error) {
                swal('Error', error.message, 'error');
              } else {
                swal('Poof! This account has been deleted!', {
                  icon: 'success',
                });
              }
            });
          } else {
            swal('You canceled the deletion!');
          }
        });
  }

  addAdmin(id) {
    swal({
      title: 'Are you sure?',
      text: 'This will add this user as an admin!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
        .then((willAdmin) => {
          if (willAdmin) {
            Meteor.call('setRoleOnUser', {
              user: id,
              role: 'admin',
            }, (error) => {
              if (error) {
                swal('Error', error.message, 'error');
              } else {
                swal('Poof! This account has been added as an admin!', {
                  icon: 'success',
                });
              }
            });
          } else {
            swal('You canceled giving this user admin permissions!');
          }
        });
  }

  removeAdmin(id) {
    swal({
      title: 'Are you sure?',
      text: 'This will remove this user as admin!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
        .then((willVendor) => {
          if (willVendor) {
            Meteor.call('removeRole', {
              user: id,
              role: 'admin',
            }, (error) => {
              if (error) {
                swal('Error', error.message, 'error');
              } else {
                swal('Poof! This account has been removed as admin!', {
                  icon: 'success',
                });
              }
            });
          } else {
            swal('You canceled removing this user as admin!');
          }
        });
  }

  addVendor(id) {
    swal({
      title: 'Are you sure?',
      text: 'This will add this user as a vendor!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
        .then((willVendor) => {
          if (willVendor) {
            Meteor.call('setRoleOnUser', {
              user: id,
              role: 'vendor',
            }, (error) => {
              if (error) {
                swal('Error', error.message, 'error');
              } else {
                swal('Poof! This account has been added as a vendor!', {
                  icon: 'success',
                });
              }
            });
          } else {
            swal('You canceled giving this user vendor permissions!');
          }
        });
  }

  removeVendor(id) {
    swal({
      title: 'Are you sure?',
      text: 'This will remove this user as a vendor!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
        .then((willVendor) => {
          if (willVendor) {
            Meteor.call('removeRole', {
              user: id,
              role: 'vendor',
            }, (error) => {
              if (error) {
                swal('Error', error.message, 'error');
              } else {
                swal('Poof! This account has been removed as a vendor!', {
                  icon: 'success',
                });
              }
            });
          } else {
            swal('You canceled removing vendor permissions!');
          }
        });
  }

  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.accounts.username}</Table.Cell>
          <Table.Cell>
            {Roles.userIsInRole(this.props.accounts._id, 'admin') ? (
                'Yes'
            ) : ''}
            {!Roles.userIsInRole(this.props.accounts._id, 'admin') ? (
                'No'
            ) : ''}
          </Table.Cell>
          <Table.Cell>
            {Roles.userIsInRole(this.props.accounts._id, 'vendor') ? (
                'Yes'
            ) : ''}
            {!Roles.userIsInRole(this.props.accounts._id, 'vendor') ? (
                'No'
            ) : ''}
          </Table.Cell>
          <Table.Cell>
            <Button positive icon onClick={() => this.addAdmin(this.props.accounts._id)}>
              Add as Admin
            </Button>
          </Table.Cell>
          <Table.Cell>
            <Button negative icon onClick={() => this.removeAdmin(this.props.accounts._id)}>
              Remove as Admin
            </Button>
          </Table.Cell>
          <Table.Cell>
            <Button positive icon onClick={() => this.addVendor(this.props.accounts._id)}>
              Add as Vendor
            </Button>
          </Table.Cell>
          <Table.Cell>
            <Button negative icon onClick={() => this.removeVendor(this.props.accounts._id)}>
              Remove as Vendor
            </Button>
          </Table.Cell>
          <Table.Cell><Button negative icon onClick={() => this.removeItem(this.props.accounts._id)}>
            <Icon name='trash' />
          </Button></Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
AccountTableAdmin.propTypes = {
  accounts: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */

export default withTracker(() => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Users');
  return {
    ready: subscription.ready(),
  };
})(AccountTableAdmin);
