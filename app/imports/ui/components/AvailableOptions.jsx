import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Loader } from 'semantic-ui-react';
import MenuItem from '/imports/ui/components/MenuItem';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import moment from 'moment';
import { MenuItems } from '../../api/menu/MenuItems';

class AvailableOptions extends React.Component {

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  available(item) {
    // eslint-disable-next-line radix
    let start = moment().hour(parseInt(item.starting) - 1);
    if (item.startingPeriod === 'PM') {
      // eslint-disable-next-line radix
      start = moment().hour(parseInt(item.starting) + 12);
    }
    // console.log(start);
    // eslint-disable-next-line radix
    let end = moment().hour(parseInt(item.ending) - 1);
    if (item.endingPeriod === 'PM') {
      // eslint-disable-next-line radix
      end = moment().hour(parseInt(item.ending) + 12);
    }
    // console.log(end);
    if (moment().isBefore(end) && moment().isAfter(start)) {
      // console.log(true);
      return true;
    }
    // console.log(false);
    return false;
  }

  renderPage() {
    return (
        <div>
          <Card.Group itemsPerRow={3}>
            {this.props.menuitems.filter(this.available).map((menuitems, index) => <MenuItem key={index}
                          menuitems={menuitems} />)}
          </Card.Group>
        </div>
    );
  }
}

AvailableOptions.propTypes = {
  menuitems: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('AllMenuItems');
  return {
    menuitems: MenuItems.find({}).fetch(),
    ready: subscription.ready(),
  };
})(AvailableOptions);
