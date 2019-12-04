import React from 'react';
import { Grid, Segment, Header, Loader, Form } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SelectField from 'uniforms-semantic/SelectField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import SimpleSchema from 'simpl-schema';
import { MenuItems } from '../../api/menu/MenuItems';
import { Favorites } from '../../api/favorite/Favorites';

/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  name: { label: 'Name of Food', type: String },
  image: { label: 'URL to image', type: String },
  vendor: { label: 'Vendor', type: String },
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
    allowedValues: ['Chinese', 'Japanese', 'French', 'American'],
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
class EditMenuItem extends React.Component {

  /** On submit, insert the data. */
  submit(data) {
    const {
      name, image, vendor, price, availability, starting, startingPeriod, ending, endingPeriod,
      vegan, ethnicity, _id } = data;
    const owner = Meteor.user().username;
    const id = this.props.doc._id;
    console.log(id);
    const master = 'yes';
    MenuItems.update(_id, { $set: {
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
        } },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Item updated successfully', 'success');
          }
        });
    console.log(Favorites.find({ MenuId: id }));
    Favorites.find({ MenuId: id }).map((favorite) => Favorites.update(favorite._id, { $set: {
        name: name,
        image: image,
        vendor: vendor,
        price: price,
        availability: availability,
        starting: starting,
        startingPeriod: startingPeriod,
        ending: ending,
        endingPeriod: endingPeriod,
        vegan: vegan,
        ethnicity: ethnicity,
      } }));
  }

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    return (
        <div className='yellow padding'>
          <Grid container centered>
            <Grid.Column>
              <Header as="h2" textAlign="center">Edit a Menu Item!</Header>
              <AutoForm schema={formSchema} onSubmit={data => this.submit(data)} model={this.props.doc}>
                <Segment>
                  <Form.Group widths='equal'>
                  <TextField className='josefin' name='name'/>
                  <TextField className='josefin' name='image'/>
                  <TextField className='josefin' name='vendor'/>
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

EditMenuItem.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('AllMenuItems');
  const subscription2 = Meteor.subscribe('AllFavorites');
  return {
    doc: MenuItems.findOne(documentId),
    ready: subscription.ready() && subscription2.ready(),
  };
})(EditMenuItem);
