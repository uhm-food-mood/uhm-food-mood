import React from 'react';
import { Container, Header, Divider } from 'semantic-ui-react';
import SearchFormFoodListingsAdmin from '../components/SearchFormFoodListingsAdmin';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class FoodListingsAdmin extends React.Component {

  /** Render the page once subscriptions have been received. */
  render() {
    return (
        <div className="peach">
          <Container>
            <Header as="h2" textAlign="center" className="Montserrat">MANAGE VENDORS</Header>
            <Divider/>
            <SearchFormFoodListingsAdmin/>
            <br/>
          </Container>
        </div>
    );
  }
}

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default FoodListingsAdmin;
