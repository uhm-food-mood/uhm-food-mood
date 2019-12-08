import React from 'react';
import { Grid, Segment, Header, Form } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SelectField from 'uniforms-semantic/SelectField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import SimpleSchema from 'simpl-schema';
import { withTracker } from 'meteor/react-meteor-data';
import { MenuItems } from '../../api/menu/MenuItems';
import { Names } from '../../api/name/Names';
import BackButton from '../components/BackButton';

/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  name: { label: 'Name of Food', type: String },
  image: { label: 'URL to image', type: String },
  vendor: { label: 'Vendor', type: String, defaultValue: 'Ven' },
  price: { label: 'Price', type: String },
  vegan: {
    label: 'Vegan',
    type: String,
    allowedValues: ['yes', 'no'],
    defaultValue: 'yes',
  },
  ethnicity: {
    label: 'Ethnicity',
    type: String,
    allowedValues: ['Chinese', 'Japanese', 'French', 'American', 'Thai', 'Mediterranean', 'Middle Eastern',
      'Indian', 'Mexican', 'Hawaiian', 'Brazilian', 'Korean', 'Vietnamese'],
    defaultValue: 'Chinese',
  },
  availability: { label: 'Days Open', type: String },
  starting: {
    label: 'Start availability time',
    type: String,
    allowedValues: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    defaultValue: '1',
  },
  startingPeriod: {
    type: String,
    allowedValues: ['AM', 'PM'],
    defaultValue: 'AM',
  },
  ending: {
    label: 'End availability time',
    type: String,
    allowedValues: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    defaultValue: '2',
  },
  endingPeriod: {
    type: String,
    allowedValues: ['AM', 'PM'],
    defaultValue: 'AM',
  },
});

/** Renders the Page for adding a document. */
class AddMenuItem extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    let {
      // eslint-disable-next-line prefer-const
      name, image, vendor, price, availability, starting, startingPeriod, ending, endingPeriod,
      // eslint-disable-next-line prefer-const
      vegan, ethnicity } = data;
    const owner = Meteor.user().username;
    if (Roles.userIsInRole(Meteor.userId(), 'vendor')) {
      vendor = Names.findOne({ username: owner }).name;
      // console.log(Meteor.user().username);
      // console.log(vendor);
    }
    const master = 'yes';
    MenuItems.insert({
          name,
          image,
          vendor,
          price,
          availability,
          starting,
          startingPeriod,
          ending,
          endingPeriod,
          vegan,
          ethnicity,
          owner,
          master,
        },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Item added successfully', 'success');
            formRef.reset();
          }
        });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    return (
        <div className='peach padding'>
          <Grid container centered>
            <Grid.Column>
              <Header as="h2" textAlign="center">Add a Menu Item!</Header>
              <BackButton/>
              <br/>
              <br/>
              <AutoForm ref={ref => {
                fRef = ref;
              }} schema={formSchema} onSubmit={data => this.submit(data, fRef)}>
                <Segment>
                  <Form.Group widths='equal'>
                  <TextField className='josefin' name='name'/>
                  <TextField className='josefin' name='image'/>
                    {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
                        <TextField className='josefin' name='vendor'/>
                    ) : ''}
                  </Form.Group>
                  <Form.Group widths='equal'>
                  <TextField className='josefin' name='price'/>
                  <SelectField className='josefin' name='vegan'/>
                  <SelectField className='josefin' name='ethnicity'/>
                  </Form.Group>
                  <Form.Group widths='equal'>
                  <TextField className='josefin' name='availability'/>
                  <SelectField className='josefin' name='starting'/>
                  <SelectField className='josefin' name='startingPeriod'/>
                  <SelectField className='josefin' name='ending'/>
                  <SelectField className='josefin' name='endingPeriod'/>
                  </Form.Group>
                  <Form.Group widths='equal'>
                  <SubmitField className='josefin' value='Submit'/>
                  </Form.Group>
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

export default withTracker(() => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Names');
  return {
    ready: subscription.ready(),
  };
})(AddMenuItem);
