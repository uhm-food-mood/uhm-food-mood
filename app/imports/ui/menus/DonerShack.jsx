import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
export default class DonerShack extends React.Component {
  render() {
    return (
        <div className='foodlistingsbg'>
          <Container>
            <h1 className='foodlisting-landing'>Doner Shack
              <Image centered src='http://manoa.hawaii.edu/food/daSpot_files/stacks_image_22.png'/></h1>
            <h1 className='foodlisting-landing'>Monday - Friday</h1>
            <h1 className='foodlisting-landing'>10:00am - 2:00pm</h1>
            <h2 className='foodlistingsbg'>
              <Grid centered>
                <Image src='http://manoa.hawaii.edu/food/donerShack_files/stacks_image_2683.png' size='large'/>
                <p>
                  Rotating between Korean Studies (Monday), Kennedy Theatre (Tuesday),
                  Post (Wednesday), Kuykendall (Thursday), and Architecture (Friday)
                </p>
                <p>
                  Doner Shack is a Mediterranean style restaurant that serves beef/lamb or chicken
                  doner kebabs made on a vertical rotisseries. We have a variety of options including mixed plates,
                  salads, wraps and sandwiches.
                </p>
                <Image src='http://manoa.hawaii.edu/food/daSpot_files/stacks_image_255.png'/>
              </Grid>
              <Grid centered>
                <Image src='http://manoa.hawaii.edu/food/donerShack_files/stacks_image_2924.png'/>
                <Grid.Row>
                 Lamb/Beef Plate
                </Grid.Row>
                <Grid.Row>
                  Chicken Plate
                </Grid.Row>
                <Grid.Row>
                  Mix Plate (lamb, beef & chicken)
                </Grid.Row>
                <Image src='http://manoa.hawaii.edu/food/donerShack_files/stacks_image_2719.png'/>
                <Grid.Row>
                  Lamb/Beef Wrap
                </Grid.Row>
                <Grid.Row>
                  Chicken Wrap
                </Grid.Row>
                <Grid.Row>
                  Mix Wrap (lamb, beef & chicken)
                </Grid.Row>
                <Image src='http://manoa.hawaii.edu/food/donerShack_files/stacks_image_2723.png'/>
                <Grid.Row>
                  Lamb/Beef Salad
                </Grid.Row>
                <Grid.Row>
                  Chicken Salad
                </Grid.Row>
                <Grid.Row>
                  Mix Salad (lamb, beef & chicken)
                </Grid.Row>
                <Image src='http://manoa.hawaii.edu/food/donerShack_files/stacks_image_2727.png'/>
                <Grid.Row>
                  Drinks
                </Grid.Row>
                <Grid.Row>
                  Garlic Yogurt Sauce
                </Grid.Row>
              </Grid>
            </h2>
          </Container>
        </div>
    );
  }
}
