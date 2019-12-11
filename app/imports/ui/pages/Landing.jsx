import React from 'react';
import { Container, Card, Grid } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import MenuItem from '/imports/ui/components/MenuItem';
import { MenuItems } from '../../api/menu/MenuItems';
import { Reviews } from '../../api/review/Reviews';

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
                    <div className='landing-desc'>
                      <p>UHM Food Mood strives to give an easily
                        accessible catalog of all food options at UH Manoa.
                        Users can pick their favorites on campus,
                        from food trucks to options at Campus Center and Paradise Palms.
                        They will be able to see which of their favorites are available right at this moment.
                        Vendors can add their own menu items to the catalog of UH food options.
                      </p>
                      <p>What are you waiting for? Make a profile by clicking on the Login button at the top
                        right corner and sign up for a new account. Click the heart on the food items that
                        you would like to favorite, under either Students&#39; Top Choices or the Food Options
                        page. You can find all your favorites in Your Favorites tab.
                      </p>
                    </div>
                  </Grid.Column>
                </Grid>
              </Container>
          </div>
          </div>
          <div className='yellow'>
            <Container>
              <h1 className='center landing'>STUDENTS&#39; TOP CHOICES</h1>
              <Card.Group itemsPerRow={3}>
                {this.props.sorteditems.map((menuitems, index) => <MenuItem key={index} menuitems={menuitems}/>)}
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
  sorteditems: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const menu = MenuItems.find({}).fetch();
  const sortedMenu = menu.sort(function (a, b) {
    const first = a;
    const total1 = Reviews.find({ menuId: first._id }).fetch();
    let average1 = Object.values(total1).reduce((t, { rating }) => t + rating, 0);
    // console.log(average);
    const length = Reviews.find({ menuId: first._id }).fetch().length;
    // console.log(length);
    average1 /= length;
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(average1)) {
      average1 = 0;
    }
    // console.log(`average1: ${average1}`);
    const second = b;
    const total2 = Reviews.find({ menuId: second._id }).fetch();
    let average2 = Object.values(total2).reduce((t, { rating }) => t + rating, 0);
    // console.log(average);
    const length2 = Reviews.find({ menuId: second._id }).fetch().length;
    // console.log(length);
    average2 /= length2;
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(average2)) {
      average2 = 0;
    }
    // console.log(`average2: ${average2}`);
    return average2 - average1;
  });
  const subscription = Meteor.subscribe('AllMenuItems');
  const subscription2 = Meteor.subscribe('Reviews');
  return {
    menuitems: MenuItems.find({}, { limit: 3 }).fetch(),
    sorteditems: sortedMenu.slice(0, 3),
    ready: subscription.ready() && subscription2.ready(),
  };
})(Landing);
