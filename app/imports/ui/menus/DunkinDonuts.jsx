import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
export default class DunkinDonuts extends React.Component {
  render() {
    return (
        <div className='foodlistingsbg'>
          <Container>
            <h1 className='foodlisting-landing'>Dunkin'Donuts
              <Image centered src='http://manoa.hawaii.edu/food/daSpot_files/stacks_image_22.png'/></h1>
            <h1 className='foodlisting-landing'>Monday - Friday</h1>
            <h1 className='foodlisting-landing'>8:00am - 5:00pm</h1>
            <h2 className='foodlistingsbg'>
              <Grid centered>
                <Image src='http://manoa.hawaii.edu/food/dunkindonuts_files/stacks_image_27.png' size='large'/>
              </Grid>
              <Grid centered>
                <p>
                  Paradise Palms Café
                </p>
                <p>
                  Dunkin’ Donuts in Paradise Palms Cafe will keep Hawaii running with high-quality beverage
                  offerings–including freshly-brewed Hot and Iced Coffees–paired perfectly with delicious donuts,
                  bakery good, sandwiches and more.
                </p>
                <Image src='http://manoa.hawaii.edu/food/daSpot_files/stacks_image_255.png'/>
              </Grid>
              <Grid centered>
                <Grid.Row>
                  Hot Coffee
                </Grid.Row>
                <Grid.Row>
                  Ice Coffee
                </Grid.Row>
                <Grid.Row>
                  Blended Coffee
                </Grid.Row>
                <Grid.Row>
                  Donuts
                </Grid.Row>
                <Grid.Row>
                  Breakfast
                </Grid.Row>
                <Grid.Row>
                  Lunch Sandwiches
                </Grid.Row>
              </Grid>
            </h2>
          </Container>
        </div>
    );
  }
}
