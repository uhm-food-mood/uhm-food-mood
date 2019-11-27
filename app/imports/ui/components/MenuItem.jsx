import React from 'react';
import { Card, Image, Label, Icon, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */

function available(starting, startingPeriod, ending, endingPeriod) {
  let start = moment().hour(parseInt(starting));
  if (startingPeriod === 'PM') {
    start = moment().hour(parseInt(starting) + 12);
  }
  console.log(start);
  let end = moment().hour(parseInt(ending));
  if (endingPeriod === 'PM') {
    end = moment().hour(parseInt(ending) + 12);
  }
  console.log(end);
  const now = moment().hour();
  console.log(now);
  if (now.getHours > start.getHours && now.getHours < end.getHours) {
    return true;
  }
  return false;
}

class MenuItem extends React.Component {

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
            <Card.Description>{this.props.menuitems.starting}:00 {this.props.menuitems.startingPeriod} -
              {this.props.menuitems.ending}:00 {this.props.menuitems.endingPeriod}
            </Card.Description>
            {available(this.props.menuitems.starting,
                this.props.menuitems.startingPeriod,
                this.props.menuitems.ending,
                this.props.menuitems.endingPeriod) ? (
            <Card.Description>
              Available now!
            </Card.Description>
            ) : ''}
            <Button icon>
              <Icon name='heart' />
            </Button>
            <Label color='red'>{this.props.menuitems.ethnicity}</Label>
            {this.props.menuitems.vegan === 'yes' ? (
              <Label color='green'>vegan</Label>
            ) : ''}
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
MenuItem.propTypes = {
  menuitems: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(MenuItem);
