import React from 'react';
import { Card, Image, Label, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import moment from 'moment';
import { MenuItems } from '../../api/menu/MenuItems';

function available(starting, startingPeriod, ending, endingPeriod) {
  // eslint-disable-next-line radix
  let start = moment().hour(parseInt(starting));
  if (startingPeriod === 'PM') {
    // eslint-disable-next-line radix
    start = moment().hour(parseInt(starting) + 12);
  }
  // console.log(start);
  // eslint-disable-next-line radix
  let end = moment().hour(parseInt(ending));
  if (endingPeriod === 'PM') {
    // eslint-disable-next-line radix
    end = moment().hour(parseInt(ending) + 12);
  }
  // console.log(end);
  if (moment().isBefore(end) && moment().isAfter(start)) {
    // console.log(true);
    return true;
  }
  // console.log(false);
  return false;
}

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class MenuItemVendor extends React.Component {

  removeItem(docID) {
    MenuItems.remove(docID);
    // console.log(docID);
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
            <Card.Meta>${this.props.menuitems.price}</Card.Meta>
            <Card.Description>{this.props.menuitems.availability}</Card.Description>
            <Card.Description>{this.props.menuitems.starting}:00 {this.props.menuitems.startingPeriod} -
              {this.props.menuitems.ending}:00 {this.props.menuitems.endingPeriod}
            </Card.Description>
            {available(this.props.menuitems.starting,
                this.props.menuitems.startingPeriod,
                this.props.menuitems.ending,
                this.props.menuitems.endingPeriod) ? (
                <Card.Description className="green">
                  Available now!
                </Card.Description>
            ) : ''}
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
MenuItemVendor.propTypes = {
  menuitems: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(MenuItemVendor);
