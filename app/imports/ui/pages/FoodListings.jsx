import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** A simple static component to render some text for the landing page. */
export default class FoodListings extends React.Component {
  render() {
    return (
        <div className='foodlistingsbg'>
          <Container>
            <h1 className='foodlisting-landing'>PLACES TO EAT</h1>
            <h2 className='foodlistingsbg'>
            <Grid>
              <Grid.Row>
                <Grid.Column width={2}>
                  <Link to='DaSpot'><Image src='http://manoa.hawaii.edu/food/index_files/stacks_image_22.png'/>
                  </Link>
                </Grid.Column>
                <Grid.Column width={3}>
                  <p>
                    Da Spot
                  </p>
                <p>
                  Da Spot serves an all vegetarian menu of fresh health foods from around the globe.
                </p>
                </Grid.Column>
              <Grid.Column width={2}>
                <Image src='http://manoa.hawaii.edu/food/index_files/stacks_image_2604.png'/>
              </Grid.Column>
              <Grid.Column width={3}>
                <p>
                  Doner Shack
                </p>
                  <p>
                    Doner Shack is a Mediterranean style restaurant that serves beef/lamb or
                    chicken doner kebabs made on a vertical rotisseries.
                  </p>
              </Grid.Column>
                <Grid.Column width={2}>
                  <Image src='http://manoa.hawaii.edu/food/index_files/stacks_image_57.png'/>
                </Grid.Column>
                <Grid.Column width={3}>
                  <p>
                    Dunkin' Donuts
                  </p>
                  <p>
                    Dunkin’ Donuts in Paradise Palms Cafe will keep Hawaii running with
                    high-quality beverage offerings–including freshly-brewed Hot and Iced Coffees–paired
                    perfectly with delicious donuts, bakery good, sandwiches and more.
                  </p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={2}>
                  <Image src='http://manoa.hawaii.edu/food/index_files/stacks_image_2004.png'/>
                </Grid.Column>
                <Grid.Column width={3}>
                  <p>
                    Govinda's
                  </p>
                  <p>
                    Govinda&apos;s offers a 100% pure vegetarian menu, with items low in cholesterol and mostly organic.
                    They strive to bring you a healthy and delicious meal at the best possible price.
                  </p>
                </Grid.Column>
                <Grid.Column width={2}>
                  <Image src='http://manoa.hawaii.edu/food/index_files/stacks_image_639.png'/>
                </Grid.Column>
                <Grid.Column width={3}>
                  <p>
                    Holoholo Grill
                  </p>
                  <p>
                    Holoholo Grill features healthy locally grown salads, sandwiches, poke bowls and
                    grab and go items at affordable prices.
                  </p>
                </Grid.Column>
                <Grid.Column width={2}>
                  <Image src='http://manoa.hawaii.edu/food/index_files/stacks_image_2933.png'/>
                </Grid.Column>
                <Grid.Column width={3}>
                  <p>
                    Hot Tacos
                  </p>
                  <p>
                    Hot Tacos offers authentic Mexican food, prepped and
                    cooked daily from scratch offering tacos, burritos,
                    and quesadillas with meat options like steak, chicken, marinated pork, and shredded beef.
                  </p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={2}>
                  <Image src='http://manoa.hawaii.edu/food/index_files/stacks_image_2525.png'/>
                </Grid.Column>
                <Grid.Column width={3}>
                  <p>
                    Just Ice
                  </p>
                  <p>
                    Just Ice Hawaii is bringing a simply nice selection of frozen treats to the campus in style.
                    Also on the menu is poke bowls, poke nachos and a variety of paninis.
                  </p>
                </Grid.Column>
                <Grid.Column width={2}>
                  <Image src='http://manoa.hawaii.edu/food/index_files/stacks_image_1880.png'/>
                </Grid.Column>
                <Grid.Column width={3}>
                  <p>
                    Kamitoku Ramen
                  </p>
                  <p>
                    Kamitoku Ramen specializes in a Tottori-style beef bone ramen.
                  </p>
                </Grid.Column>
                <Grid.Column width={2}>
                  <Image src='http://manoa.hawaii.edu/food/index_files/stacks_image_75.png'/>
                </Grid.Column>
                <Grid.Column width={3}>
                  <p>
                    L&L Hawaiian Barbecue
                  </p>
                  <p>
                    Delicious local and Asian-American fusion cuisine served in big portions at reasonable prices!
                  </p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={2}>
                  <Image src='http://manoa.hawaii.edu/food/index_files/stacks_image_86.png'/>
                </Grid.Column>
                <Grid.Column width={3}>
                  <p>
                    Lasoon
                  </p>
                  <p>
                    Lagoon offers something for everyone with their signature exotic South Indian and Malaysian cuisine.
                  </p>
                </Grid.Column>
                <Grid.Column width={2}>
                  <Image src='http://manoa.hawaii.edu/food/index_files/stacks_image_266.png'/>
                </Grid.Column>
                <Grid.Column width={3}>
                  <p>
                    Le Crêpe Café
                  </p>
                    <p>
                    Le Crêpe Café makes traditional French crêpes, cooked to order in front of customers.
                  </p>
                </Grid.Column>
                <Grid.Column width={2}>
                  <Image src='http://manoa.hawaii.edu/food/index_files/stacks_image_2698.png'/>
                </Grid.Column>
                <Grid.Column width={3}>
                  <p>
                    Ono Seafood
                  </p>
                  <p>
                    Traditional super ono ahi & tako poke; always fresh, premium ahi- never frozen!
                    Made to order poke by the pound & poke bowls.
                  </p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={2}>
                  <Image src='http://manoa.hawaii.edu/food/index_files/stacks_image_581.png'/>
                </Grid.Column>
                <Grid.Column width={3}>
                  <p>
                    Panda Express
                  </p>
                  <p>
                    Panda Express serves gourmet Chinese food made with only the freshest ingredients.
                  </p>
                </Grid.Column>
                <Grid.Column width={2}>
                  <Image src='http://manoa.hawaii.edu/food/index_files/stacks_image_2680.png'/>
                </Grid.Column>
                <Grid.Column width={3}>
                  <p>
                    Rocket Coffee
                  </p>
                  <p>
                    Rocket Coffee is blasting off on campus, out to boost your
                    day with a premium selection of caffeinated drinks.
                  </p>
                </Grid.Column>
                <Grid.Column width={2}>
                  <Image src='http://manoa.hawaii.edu/food/index_files/stacks_image_1956.png'/>
                </Grid.Column>
                <Grid.Column width={3}>
                  <p>
                    Sistah Truck
                  </p>
                  <p>
                    Sistah Truck serves Korean-inspired local cuisine.
                  </p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={2}>
                  <Image src='http://manoa.hawaii.edu/food/index_files/stacks_image_42.png'/>
                </Grid.Column>
                <Grid.Column width={3}>
                  <p>
                    The Bean Counter
                  </p>
                  <p>
                    Local beans, Local flavor...your Local Coffee Bar.
                  </p>
                </Grid.Column>
                <Grid.Column width={2}>
                  <Image src='http://latourbakehouse.com/wp-content/uploads/2013/07/bale1.jpg'/>
                </Grid.Column>
                <Grid.Column width={3}>
                  <p>
                    Ba-Le
                  </p>
                  <p>
                    Pastries, sandwiches, and pre-made salads are some of their quick lunch options.
                    Popular items at Ba-Le include pho, pad thai, and banh mi sandwiches.
                  </p>
                </Grid.Column>
                <Grid.Column width={2}>
                  <Image src='https://cdn.jamba.com/-/media/jamba/site-logos/logo.svg?v=1&d=20190605T170844Z'/>
                </Grid.Column>
                <Grid.Column width={3}>
                  <p>
                    Jamba
                  </p>
                  <p>
                    Jamba blends real fruit and whole ingredients into each delicious fresh juice, smoothie,
                    or energy bowl you order and contains no artificial colors, preservatives, or flavors.
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

FoodListings.propTypes = {
  menuitems: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};
