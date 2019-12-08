import React from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import swal from 'sweetalert';
import { Favorites } from '../../api/favorite/Favorites';

/** Renders a single row in the List favoritess table. See pages/Listfavoritess.jsx. */
class MenuTableFavoriteAdmin extends React.Component {
  removeItem(docID) {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this favorite!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
        .then((willDelete) => {
          if (willDelete) {
            Favorites.remove(docID);
            swal('Poof! This favorite has been deleted!', {
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
          <Table.Cell>{this.props.favorites.owner}</Table.Cell>
          <Table.Cell>{this.props.favorites.name}</Table.Cell>
          <Table.Cell>{this.props.favorites.vendor}</Table.Cell>
          <Table.Cell><Button negative icon onClick={() => this.removeItem(this.props.favorites._id)}>
            <Icon name='trash' />
          </Button></Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
MenuTableFavoriteAdmin.propTypes = {
  favorites: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */

export default withTracker(() => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('AllFavorites');
  return {
    ready: subscription.ready(),
  };
})(MenuTableFavoriteAdmin);
