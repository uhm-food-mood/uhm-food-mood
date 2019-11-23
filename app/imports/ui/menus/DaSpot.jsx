import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
export default class DaSpot extends React.Component {
  render() {
    return (
        <div className='foodlistingsbg'>
          <Container>
            <h1 className='foodlisting-landing'>Da Spot
              <Image centered src='http://manoa.hawaii.edu/food/daSpot_files/stacks_image_22.png'/></h1>
            <h1 className='foodlisting-landing'>Monday - Friday</h1>
            <h1 className='foodlisting-landing'>10:00am - 2:00pm</h1>
            <h2 className='foodlistingsbg'>
              <Grid centered>
                <Image src='https://manoa.hawaii.edu/food/daSpot_files/stacks_image_1850.png' size='medium'/>
                <Image src='https://manoa.hawaii.edu/food/daSpot_files/stacks_image_1853.png' size='medium'/>
                <p>
                  Sustainability Courtyard & Saunders Hall (2 locations)
                </p>
                <p>
                  Da Spot Health Foods & Juices offers diverse, healthy and affordable cuisine with
                  a unique take on tasty dishes from around the world. Da Spot specializes in Mediterranean and North
                  African food with vegan and specialty meat options that can be certified halal or kosher. Offering
                  imaginative cuisine in exotic styles of Egyptian, Greek, French, Italian, Indian, Thai, Malaysian,
                  Ethiopian, American, Hawaiian, Japanese, Chinese, Korean, Pacific Rim and fusion cooking.
                  Da Spot's menu also features over 15 combinations of different fruit smoothies.
                </p>
                <Image src='http://manoa.hawaii.edu/food/daSpot_files/stacks_image_255.png'/>
              </Grid>
              <Grid centered>
                <Image src='http://manoa.hawaii.edu/food/daSpot_files/stacks_image_3.png'/>
              <Grid.Row>
              <Grid.Column width={2}>
                <p>
                  Monday
                </p>
              </Grid.Column>
                <Grid.Column width={10}>
                    <p>
                      Eggplant Parmesan, Foul Modamis (fava bean dish), Moussakka
                    </p>
                </Grid.Column>
              </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2}>
                    <p>
                      Tuesday
                    </p>
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <p>
                      Eggplant Parmesan, Foul Modamis (fava bean dish), Moussakka
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2}>
                    <p>
                      Wednesday
                    </p>
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <p>
                      Eggplant Parmesan, Foul Modamis (fava bean dish), Moussakka
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2}>
                    <p>
                      Thursday
                    </p>
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <p>
                      Eggplant Parmesan, Foul Modamis (fava bean dish), Moussakka
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2}>
                    <p>
                      Friday
                    </p>
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <p>
                      Eggplant Parmesan, Foul Modamis (fava bean dish), Moussakka
                    </p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </h2>
          </Container>
        </div>
    );
  }
}
