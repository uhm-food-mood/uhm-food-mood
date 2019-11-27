import React from 'react';
import { Card, Image, Label, Icon, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Favorites } from '../../api/favorite/Favorites';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class FavoriteItem extends React.Component {

  removeItem(docID) {
    Favorites.remove(docID);
  }

  render() {
    return (
        <Card>
          <Card.Content>
            <Image
                src={this.props.FavoriteItems.image}
                fluid
            />
            <Card.Header>{this.props.FavoriteItems.name}</Card.Header>
            <Card.Meta>{this.props.FavoriteItems.vendor} - ${this.props.FavoriteItems.price}</Card.Meta>
            <Card.Description>{this.props.FavoriteItems.starting}:00 {this.props.FavoriteItems.startingPeriod} -
              {this.props.FavoriteItems.ending}:00 {this.props.FavoriteItems.endingPeriod}
            </Card.Description>
            <Button icon onClick={() => this.removeItem(this.props.FavoriteItems._id)}>
              <Icon name='trash' />
            </Button>
            <Label color='red'>{this.props.FavoriteItems.ethnicity}</Label>
            {this.props.FavoriteItems.vegan === 'yes' ? (
              <Label color='green'>vegan</Label>
            ) : ''}
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
FavoriteItem.propTypes = {
  FavoriteItems: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(FavoriteItem);
