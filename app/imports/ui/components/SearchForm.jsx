import React from 'react';
import { Form } from 'semantic-ui-react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  handleFormSubmit = () => {
    console.log('search:', this.state.query);
  }

  handleInputChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  }

  render() {
    return (
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Input placeholder='Search...' value={this.state.query} onChange={this.handleInputChange} width={4}/>
        </Form>
    );
  }
}

export default SearchForm;
