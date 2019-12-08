import React from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { MenuItems } from '../../api/menu/MenuItems';

/** Renders a single row in the List menuitemss table. See pages/Listmenuitemss.jsx. */
class MenuTableAdmin extends React.Component {
  removeItem(docID) {
    MenuItems.remove(docID);
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
          <Table.Cell><Button icon onClick={() => this.removeItem(this.props.menuitems._id)}>
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
export default withRouter(MenuTableAdmin);
