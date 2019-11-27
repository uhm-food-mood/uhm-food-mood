import React from 'react';
import { Card, Image, Label, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { MenuItems } from '../../api/menu/MenuItems';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class MenuItemAdmin extends React.Component {

  removeItem(docID) {
    MenuItems.remove(docID);
  }

  render() {
    return (
        <Card>
          <Card.Content>
            <Image
                src={this.props.menuitems.image}
                fluid
            />
            <Card.Header>{this.props.menuitems.name}</Card.Header>
            <Card.Meta>{this.props.menuitems.vendor} - ${this.props.menuitems.price}</Card.Meta>
            <Card.Description>{this.props.menuitems.availability}</Card.Description>
            <Card.Description>{this.props.menuitems.starting}:00 {this.props.menuitems.startingPeriod} -
              {this.props.menuitems.ending}:00 {this.props.menuitems.endingPeriod}
            </Card.Description>
            <Label color='red'>{this.props.menuitems.ethnicity}</Label>
            {this.props.menuitems.vegan === 'yes' ? (
                <Label color='green'>vegan</Label>
            ) : ''}
          </Card.Content>
          <Card.Content extra>
            <Link to={`/edit/${this.props.menuitems._id}`}>Edit</Link>
          </Card.Content>
          <Card.Content extra>
            <Button icon onClick={() => this.removeItem(this.props.menuitems._id)}>
              Remove
            </Button>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
MenuItemAdmin.propTypes = {
  menuitems: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(MenuItemAdmin);
