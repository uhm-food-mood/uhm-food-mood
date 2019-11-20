import React from 'react';
import { Container, Card, Grid, Image } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import MenuItem from '/imports/ui/components/MenuItem';
import { MenuItems } from '../../api/menu/MenuItems';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='foodmoodbg'>
          <Container>
            <h1 className='landing'>WELCOME TO UHM FOOD MOOD</h1>
            <Grid>
              <Grid.Column width={8}>
                < Image src='images/landing-1.png'/>
              </Grid.Column>
              <Grid.Column width={8} >
                <div className='landing-description'>
            <h1 className='landing'>Your favorites. All in one place!</h1>
            <h2 className= 'landing'>UHM Food Mood strives to give an easily
              accessible catalog of all food options at UH Manoa.
              Users can pick their favorites on campus, from food trucks to options at Campus Center and Paradise Palms.
              They will be able to see which of their favorites are available right at this moment.
              Vendors can add their own menu items to the catalog of UH food options.
            </h2>
                </div>
              </Grid.Column>
            </Grid>
            <h1 className='landing'>Students&#39; Top Choices</h1>
            <Card.Group itemsPerRow={3}>
              {this.props.menuitems.map((menuitems, index) => <MenuItem key={index} menuitems={menuitems} />)}
            </Card.Group>
          </Container>

        </div>
    );
  }
}

Landing.propTypes = {
  menuitems: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('AllMenuItems');
  return {
    menuitems: MenuItems.find({}, { limit: 3 }).fetch(),
    ready: subscription.ready(),
  };
})(Landing);
