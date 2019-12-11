import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';

class SearchInstructions extends Component {
  state = { visible: true }

  handleDismiss = () => {
    this.setState({ visible: false });
  }

  handleExpand = () => {
    this.setState({ visible: true });
  }

  render() {
    if (this.state.visible) {
      return (
          <Message
              onDismiss={this.handleDismiss}>
            <Message.Header>Tips for Searching</Message.Header>
            <p>Search for food below.</p>
            <ul>
              <li>
                You can search by name, vendor, and style (ex. Chinese).
              </li>
              <li>
                You can also search for vegan food by searching &#39;vegan&#39;.
              </li>
              <li>
                Click the &#39;Food Available Now&#39; button to see food available right now.
              </li>
              <li>
                Click the &#39;Sort by Rating&#39; button to sort by highest rated food.
              </li>
              <li>
                Click both buttons to filter food available right now and sort by highest rated food!
              </li>
            </ul>
          </Message>
      );
    }

    return (
        <Message
            onDismiss={this.handleExpand}>
          <p>Search for food below.</p>
        </Message>
    );
  }
}

export default SearchInstructions;
