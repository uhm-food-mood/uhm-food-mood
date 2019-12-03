import React from 'react';
import { Container, Card, Grid } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import MenuItem from '/imports/ui/components/MenuItem';
import { MenuItems } from '../../api/menu/MenuItems';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='padding'>
          <div className='yellow'>
          <div className='landingbg'>
            <Container>
              <Grid>
                <Grid.Column width={10}>
            <br/>
            <h1 className='landing'>WELCOME TO UHM FOOD MOOD</h1>
                </Grid.Column>
                <Grid.Column width={6}>
                  <div className='landing-desc'>UHM Food Mood strives to give an easily
                    accessible catalog of all food options at UH Manoa.
                    Users can pick their favorites on campus,
                    from food trucks to options at Campus Center and Paradise Palms.
                    They will be able to see which of their favorites are available right at this moment.
                    Vendors can add their own menu items to the catalog of UH food options.
                  </div>
                  <br/>
                  <p>What are you waiting for? Make a profile by clicking on the Login button at the top
                    right corner and sign up for a new account. Click the heart on the food items that
                    you would like to favorite, under either Students' Top Choices or the Food Options
                    page. You can find all your favorites in Your Favorites tab.
                  </p>
                </Grid.Column>
              </Grid>
            </Container>
          </div>
          </div>
          <div className='yellow'>
            <Container>
            <h1 className='center landing'>STUDENTS&#39; TOP CHOICES</h1>
            <Card.Group itemsPerRow={3}>
              {this.props.menuitems.map((menuitems, index) => <MenuItem key={index} menuitems={menuitems} />)}
            </Card.Group>
              <br/>
            </Container>
          </div>
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
