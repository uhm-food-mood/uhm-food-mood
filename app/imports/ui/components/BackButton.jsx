import React from 'react';
import { Button } from 'semantic-ui-react';

/*
  Code from: https://stackoverflow.com/questions/30915173/react-router-go-back-a-page-how-do-you-configure-history
 */
class BackButton extends React.Component {
  static contextTypes = {
    router: () => true, // replace with PropTypes.object if you use them
  }

  render() {
    return (
        <Button
            negative
            className="button icon-left"
            onClick={this.context.router.history.goBack}>
          Go Back
        </Button>
    );
  }
}

export default BackButton;
