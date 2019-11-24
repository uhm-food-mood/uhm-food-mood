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
                <Image src='https://manoa.hawaii.edu/food/daSpot_files/stacks_image_1850.png' size='large'/>
                <Image src='https://manoa.hawaii.edu/food/daSpot_files/stacks_image_1853.png' size='large'/>
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
                    Monday
                  </Grid.Column>
                  <Grid.Column width={10}>
                    Eggplant Parmesan, Foul Modamis (fava bean dish), Moussakka
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2}>
                    Tuesday
                  </Grid.Column>
                  <Grid.Column width={10}>
                    Thai Red Vegetable Curry, Vege Lasagna, Egyptian Vege Curry
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2}>
                    Wednesday
                  </Grid.Column>
                  <Grid.Column width={10}>
                    Vege Parmesan, Vege Chili, Thai Green Vegetable Curry
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2}>
                    Thursday
                  </Grid.Column>
                  <Grid.Column width={10}>
                    Roasted Vegetable Medley, Coconut Garmasala Vege Curry, Thai Panang Vege Curry
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2}>
                    Friday
                  </Grid.Column>
                  <Grid.Column width={10}>
                    Malaysian Vege Curry, Grilled Lemon Herb Zucchini, Eggplant Vege Parmesan
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid centered>
                <Image src='http://manoa.hawaii.edu/food/daSpot_files/stacks_image_5.png'/>
                <Grid.Row>
                  <Grid.Column width={3}>
                    Small(16oz)
                  </Grid.Column>
                  <Grid.Column width={3}>
                    Medium(20oz)
                  </Grid.Column>
                  <Grid.Column width={3}>
                    Large(32oz)
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3}>
                    Sweet Dream
                  </Grid.Column>
                  <Grid.Column width={10}>
                    Strawberries, Haupia, Sorbet, Soymilk
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3}>
                    DaKine
                  </Grid.Column>
                  <Grid.Column width={10}>
                    Strawberries, Bananas, Lilikoi Sorbet, Passion Orange Juice
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3}>
                    StarBerry
                  </Grid.Column>
                  <Grid.Column width={10}>
                    Strawberries, Lychee Sorbet, Guava Juice
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3}>
                    StrawberryPotion
                  </Grid.Column>
                  <Grid.Column width={10}>
                    Strawberries, Bananas, Soymilk
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3}>
                    VeryBerryGood
                  </Grid.Column>
                  <Grid.Column width={10}>
                    Strawberries, Mixberries, Bananas, Grape Juice
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3}>
                    HomeGrown
                  </Grid.Column>
                  <Grid.Column width={10}>
                    Strawberries, Mixberries, Guava Sorbet, Guava Juice
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3}>
                    Grenade
                  </Grid.Column>
                  <Grid.Column width={10}>
                    Strawberries, Pomegranate Sorbet, Grape Juice
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3}>
                    SouthBerry
                  </Grid.Column>
                  <Grid.Column width={10}>
                    Strawberries, Mixberries, Acai & Haupia Sorbet, Guava Juice, Soymilk
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3}>
                    AlohaBerry
                  </Grid.Column>
                  <Grid.Column width={10}>
                    Mixberries, Bananas, Haupia Sorbet, Guava Juice, Soymilk
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3}>
                    Kalakauan
                  </Grid.Column>
                  <Grid.Column width={10}>
                    Mixberries, Bananas, Pomegranate Sorbet, Apple Juice
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3}>
                    CocoOno
                  </Grid.Column>
                  <Grid.Column width={10}>
                    Bananas, Haupia Sorbet, Soymilk
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3}>
                    LocoStyle
                  </Grid.Column>
                  <Grid.Column width={10}>
                    Bananas, Acai Sorbet, Soymilk
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3}>
                    MangoTango
                  </Grid.Column>
                  <Grid.Column width={10}>
                    Mangoes, Bananas, Lilikoi Sorbet, Passion Orange & Lemon Juice
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3}>
                    Mangolicious
                  </Grid.Column>
                  <Grid.Column width={10}>
                    Mangoes, Lychee Sorbet, Passion Orange Juice
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3}>
                    DaMango
                  </Grid.Column>
                  <Grid.Column width={10}>
                    Mangoes, Haupia Sorbet, Orange Juice
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3}>
                    Pinaco
                  </Grid.Column>
                  <Grid.Column width={10}>
                    Pineapples, Haupia Sorbet, Passion Orange Juice
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3}>
                    PineParadise
                  </Grid.Column>
                  <Grid.Column width={10}>
                    Pineapples, Strawberries, Bananas, Apple Juice
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3}>
                    OrangeSunset
                  </Grid.Column>
                  <Grid.Column width={10}>
                    Peaches, Lychee Sorbet, Passion Orange Juice
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3}>
                    LiquidSunshine
                  </Grid.Column>
                  <Grid.Column width={10}>
                    Peaches, Pears, Acai Sorbet, Apple Juice
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3}>
                    SunnySunrise
                  </Grid.Column>
                  <Grid.Column width={10}>
                    Pears, Pineapples, Lilikoi Sorbet, Orange Juice
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3}>
                    LocoCoco
                  </Grid.Column>
                  <Grid.Column width={10}>
                    Pears, Haupia Sorbet, Soymilk
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3}>
                    DaKeez
                  </Grid.Column>
                  <Grid.Column width={10}>
                    Kiwis, Strawberries, Bananas, Apple Juice
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3}>
                    WaikiKiwi
                  </Grid.Column>
                  <Grid.Column width={10}>
                    Kiwi, Mango, Guava Sorbet, Guava Juice
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3}>
                    MochaJava
                  </Grid.Column>
                  <Grid.Column width={10}>
                    Mocha, Haupia Sorbet, Brewed Coffee, Soymilk
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3}>
                    Chocolatta
                  </Grid.Column>
                  <Grid.Column width={10}>
                    Chocolate, Bananas, Soymilk
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3}>
                    PeanutButta
                  </Grid.Column>
                  <Grid.Column width={10}>
                    Peanut Butter, Haupia Sorbet, Soymilk
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3}>
                    Queens
                  </Grid.Column>
                  <Grid.Column width={10}>
                    Peanut Butter, Bananas, Acai Sorbet, Soymilk
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid centered>
                <Image src='http://manoa.hawaii.edu/food/daSpot_files/stacks_image_5.png'/>
              </Grid>
              <Grid centered>
                Create your own mix from these ingredients:
                <Grid.Row>
                  <Grid.Column width={3}>
                    Small(16oz)
                  </Grid.Column>
                  <Grid.Column width={3}>
                    Medium(20oz)
                  </Grid.Column>
                  <Grid.Column width={3}>
                    Large(32oz)
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3}>
                    Fruits:
                  </Grid.Column>
                  <Grid.Column width={10}>
                    Strawberries, Mixberries, Bananas, Mangoes, Pineapples, Peaches, Pears or Kiwis </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3}>
                    Sorbets:
                  </Grid.Column>
                  <Grid.Column width={10}>
                    Haupia, Lilikoi, Lychee, Pomegranate, Acai or Guava </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3}>
                    Juices:
                  </Grid.Column>
                  <Grid.Column width={10}>
                    Passion Orange, Guava, Orange, Apple, Grape or Soymilk </Grid.Column>
                </Grid.Row>
              </Grid>

            </h2>
          </Container>
        </div>
    );
  }
}
