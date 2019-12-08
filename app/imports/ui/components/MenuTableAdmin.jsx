import React from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';
import swal from 'sweetalert';
import { MenuItems } from '../../api/menu/MenuItems';
import { Favorites } from '../../api/favorite/Favorites';

/** Renders a single row in the List menuitemss table. See pages/Listmenuitemss.jsx. */
class MenuTableAdmin extends React.Component {
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
            MenuItems.remove(docID);
            Favorites.find({ MenuId: docID }).map((favorite) => Favorites.remove(favorite._id));
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
          <Table.Cell>{this.props.menuitems.name}</Table.Cell>
          {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
              <Table.Cell>{this.props.menuitems.vendor}</Table.Cell>
          ) : ''}
          <Table.Cell>{this.props.menuitems.price}</Table.Cell>
          <Table.Cell>{this.props.menuitems.availability}</Table.Cell>
          <Table.Cell>{this.props.menuitems.starting}:00 {this.props.menuitems.startingPeriod} -
            {this.props.menuitems.ending}:00 {this.props.menuitems.endingPeriod}</Table.Cell>
          <Table.Cell>{this.props.menuitems.ethnicity}</Table.Cell>
          <Table.Cell>
            <Link to={`/edit/${this.props.menuitems._id}`}>Edit</Link>
          </Table.Cell>
          <Table.Cell><Button negative icon onClick={() => this.removeItem(this.props.menuitems._id)}>
            <Icon name='trash' />
          </Button></Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
MenuTableAdmin.propTypes = {
  menuitems: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */

export default withTracker(() => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('AllFavorites');
  return {
    ready: subscription.ready(),
  };
})(MenuTableAdmin);
