import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import LongTextField from 'uniforms-semantic/LongTextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import SimpleSchema from 'simpl-schema';

/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  rating: { label: 'Rating', type: Number },
  description: {label: 'Description', type: String },
});

/** Renders the Page for adding a document. */
class ReviewMenuItem extends React.Component {


  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    return (
        <div className='foodmoodbg'>
          <Grid container centered>
            <Grid.Column>
              <Header as="h2" textAlign="center" inverted>Review Menu Item!</Header>
              <AutoForm ref={ref => {
                fRef = ref;
              }} schema={formSchema} onSubmit={data => this.submit(data, fRef)}>
                <Segment>
                  <TextField className='josefin' name='rating'/>
                  <LongTextField className='josefin' name='description'/>
                  <SubmitField className='josefin' value='Submit'/>
                  <ErrorsField/>
                </Segment>
              </AutoForm>
              <br/>
              <br/>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default ReviewMenuItem;
