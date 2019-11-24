import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
export default class Govindas extends React.Component {
  render() {
    return (
        <div className='foodlistingsbg'>
          <Container>
            <h1 className='foodlisting-landing'>Govinda's
              <Image centered src='http://manoa.hawaii.edu/food/daSpot_files/stacks_image_22.png'/></h1>
            <h1 className='foodlisting-landing'>Monday - Friday</h1>
            <h1 className='foodlisting-landing'>10:00am - 2:00pm</h1>
            <h2 className='foodlistingsbg'>
              <Grid centered>
                <Image src='http://manoa.hawaii.edu/food/govindas_files/stacks_image_27.png' size='large'/>
              </Grid>
              <Grid centered>
                <p>
                  Sustainability Courtyard
                </p>
                <p>
                  Want a sustainable selection for lunch? Try Govinda's, which offers a 100% pure vegetarian menu,
                  with items low in cholesterol and mostly organic. They strive to bring you a healthy and delicious
                  meal at the best possible price.

                  Govinda's uses top quality produce and only the finest quality sea salt. All of the rice, grains,
                  beans, tofu, sugar and flour are certified organic. Their menu never contains any meat or meat
                  by-products, fish, eggs, MSG, iodized salt, preservatives, hydrogenated oils, or artificial colors or
                  flavors.
                </p>
                <Image src='http://manoa.hawaii.edu/food/daSpot_files/stacks_image_255.png'/>
              </Grid>
              <Grid centered>
                <Image src='http://manoa.hawaii.edu/food/govindas_files/stacks_image_155.png'/>
                <Grid.Row>
                  <Grid.Column width={2}>
                    Mini Plate
                  </Grid.Column>
                  <Grid.Column width={8}>
                    One entrée, rice, halawa and salad or soup
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2}>
                    Full Plate </Grid.Column>
                  <Grid.Column width={8}>
                    Two Entrées, rice, soup, salad and halawa
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid centered>
                <Image src='http://manoa.hawaii.edu/food/govindas_files/stacks_image_153.png'/>
                <Grid.Row>
                  Halawa
                </Grid.Row>
                Mung Bean Soup (V)(GF)
                <Grid.Row>
                  Brown Rice (V)(GF)
                </Grid.Row>
                Salad (V)(GF)
                <Grid.Row>
                  Daily Special Entrée (V)(GF)
                </Grid.Row>
                Khichri (GF)
              </Grid>
            </h2>
          </Container>
        </div>
    );
  }
}
