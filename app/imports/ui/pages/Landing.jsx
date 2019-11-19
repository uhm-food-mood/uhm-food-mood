import React from 'react';
import { Container,Card,Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='foodmoodbg-landing'>
          <Container>
            <h1 className='landing'>WELCOME TO UHM FOOD MOOD</h1>
            <h3 className='landing'>Your favorites. All in one place!</h3>
            <h4 className= 'landing'>UHM Food Mood strives to give an easily accesible catalog of all food options at UH Manoa.
              Users can pick their favorites on campus, from food trucks to options at Campus Center and Paradise Palms.
              They will be able to see which of their favorites are available right at this moment.
              Vendors can add their own menu items to the catalog of UH food options.
            </h4>
            <Card.Group itemsPerRow={2}>
              <Card>
                  <Card.Content>
                    <Image centered size= 'medium' src='https://static.vecteezy.com/system/resources/previews/000/134/503/non_2x/free-vector-food-illustration.jpg' />
                    <Card.Header>Today's Top Picks</Card.Header>
                  </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Image centered size= 'medium' src='https://static.vecteezy.com/system/resources/previews/000/134/503/non_2x/free-vector-food-illustration.jpg' />
                  <Card.Header>Today's Top Picks</Card.Header>
                </Card.Content>
              </Card>
            </Card.Group>
          </Container>

        </div>
    );
  }
}

export default Landing;
