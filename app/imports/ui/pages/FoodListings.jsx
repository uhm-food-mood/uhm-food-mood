import React from 'react';
import { Container, Grid, Image, Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** A simple static component to render some text for the landing page. */
export default class FoodListings extends React.Component {
  render() {
    return (
        <div className='foodlistingsbg'>
          <Container>
            <h1 className='foodlisting-landing'>PLACES TO EAT</h1>
              <Card.Group>
              <Card>
                <Card.Content>
                  <Image src='http://manoa.hawaii.edu/food/index_files/stacks_image_22.png'/>
                  <Card.Header> Da Spot</Card.Header>
                <Card.Description>  Da Spot serves an all vegetarian menu of fresh health foods from around the globe. </Card.Description>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Image src='http://manoa.hawaii.edu/food/index_files/stacks_image_2604.png'/>
                  <Card.Header> Doner Shack</Card.Header>
                  <Card.Description>  Doner Shack is a Mediterranean style restaurant that serves beef/lamb or chicken doner kebabs made on a vertical rotisseries. </Card.Description>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Image src='http://manoa.hawaii.edu/food/index_files/stacks_image_57.png'/>
                  <Card.Header> Dunkin' Donuts</Card.Header>
                  <Card.Description>  Dunkin' Donuts in Paradise Palms Cafe will keep Hawaii running with high-quality beverage offerings–including freshly-brewed Hot and Iced Coffees–paired perfectly with delicious donuts, bakery good, sandwiches and more. </Card.Description>
                </Card.Content>
              </Card>
              </Card.Group>
              <Card.Group>
              <Card>
                <Card.Content>
                  <Image src='http://manoa.hawaii.edu/food/index_files/stacks_image_2004.png'/>
                  <Card.Header> Govinda's</Card.Header>
                  <Card.Description>  Govinda's offers a 100% pure vegetarian menu, with items low in cholesterol and mostly organic. They strive to bring you a healthy and delicious meal at the best possible price. </Card.Description>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Image src='http://manoa.hawaii.edu/food/index_files/stacks_image_639.png'/>
                  <Card.Header> Holoholo Grill</Card.Header>
                  <Card.Description>  Holoholo Grill features healthy locally grown salads, sandwiches, poke bowls and grab and go items at affordable prices. </Card.Description>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Image src='http://manoa.hawaii.edu/food/index_files/stacks_image_2933.png'/>
                  <Card.Header> Hot Tacos</Card.Header>
                  <Card.Description>  Hot Tacos offers authentic Mexican food, prepped and cooked daily from scratch offering tacos, burritos, and quesadillas with meat options like steak, chicken, marinated pork, and shredded beef. </Card.Description>
                </Card.Content>
              </Card>
              </Card.Group>
              <Card.Group>
              <Card>
                <Card.Content>
                  <Image src='http://manoa.hawaii.edu/food/index_files/stacks_image_2525.png'/>
                  <Card.Header> Just Ice</Card.Header>
                  <Card.Description>  Just Ice Hawaii is bringing a simply nice selection of frozen treats to the campus in style. Also on the menu is poke bowls, poke nachos and a variety of paninis. </Card.Description>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Image src='http://manoa.hawaii.edu/food/index_files/stacks_image_1880.png'/>
                  <Card.Header> Kamitoku Ramen</Card.Header>
                  <Card.Description>  Kamitoku Ramen specializes in a Tottori-style beef bone ramen with a surplus amount of seasoning to sastisfy all needs . </Card.Description>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Image src='http://manoa.hawaii.edu/food/index_files/stacks_image_75.png'/>
                  <Card.Header> L&L Hawaiian Barbecue</Card.Header>
                  <Card.Description>  Delicious local and Asian-American fusion cuisine served in big portions at reasonable prices! </Card.Description>
                </Card.Content>
              </Card>
              </Card.Group>
              <Card.Group>
              <Card>
                <Card.Content>
                  <Image src='http://manoa.hawaii.edu/food/index_files/stacks_image_86.png'/>
                  <Card.Header> Lasoon</Card.Header>
                  <Card.Description>  Lagoon offers something for everyone with their signature exotic South Indian and Malaysian cuisine. </Card.Description>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Image src='http://manoa.hawaii.edu/food/index_files/stacks_image_266.png'/>
                  <Card.Header> Le Crêpe Café</Card.Header>
                  <Card.Description>  Le Crêpe Café makes traditional French crêpes, cooked to order in front of customers. </Card.Description>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Image src='http://manoa.hawaii.edu/food/index_files/stacks_image_2698.png'/>
                  <Card.Header> Ono Seafood</Card.Header>
                  <Card.Description>  Traditional super ono ahi & tako poke; always fresh, premium ahi- never frozen! Made to order poke by the pound & poke bowls. </Card.Description>
                </Card.Content>
              </Card>
              </Card.Group>
              <Card.Group>
              <Card>
                <Card.Content>
                  <Image src='http://manoa.hawaii.edu/food/index_files/stacks_image_581.png'/>
                  <Card.Header> Panda Express</Card.Header>
                  <Card.Description>  Panda Express serves gourmet Chinese food made with only the freshest ingredients. </Card.Description>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Image src='http://manoa.hawaii.edu/food/index_files/stacks_image_2680.png'/>
                  <Card.Header> Rocket Coffee</Card.Header>
                  <Card.Description>  Rocket Coffee is blasting off on campus, out to boost your day with a premium selection of caffeinated drinks. </Card.Description>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Image src='http://manoa.hawaii.edu/food/index_files/stacks_image_1956.png'/>
                  <Card.Header> Sistah Truck</Card.Header>
                  <Card.Description>  Sistah Truck serves Korean-inspired local cuisine. </Card.Description>
                </Card.Content>
              </Card>
              </Card.Group>
              <Card.Group>
              <Card>
                <Card.Content>
                  <Image src='http://manoa.hawaii.edu/food/index_files/stacks_image_42.png'/>
                  <Card.Header> The Bean</Card.Header>
                  <Card.Description>  Local beans, Local flavor...your Local Coffee Bar. </Card.Description>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Image src='http://latourbakehouse.com/wp-content/uploads/2013/07/bale1.jpg'/>
                  <Card.Header> Ba-Le</Card.Header>
                  <Card.Description>  Pastries, sandwiches, and pre-made salads are some of their quick lunch options. Popular items at Ba-Le include pho, pad thai, and banh mi sandwiches. </Card.Description>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Image src='https://cdn.jamba.com/-/media/jamba/site-logos/logo.svg?v=1&d=20190605T170844Z'/>
                  <Card.Header> Jamba Juice</Card.Header>
                  <Card.Description>  Jamba Juice blends real fruit and whole ingredients into each delicious fresh juice, smoothie, or energy bowl you order and contains no artificial colors, preservatives, or flavors. </Card.Description>
                </Card.Content>
              </Card>
              </Card.Group>
          </Container>
        </div>
    );
  }
}

FoodListings.propTypes = {
  menuitems: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};
