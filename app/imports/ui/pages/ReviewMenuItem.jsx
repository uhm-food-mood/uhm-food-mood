import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import SelectField from 'uniforms-semantic/SelectField';
import LongTextField from 'uniforms-semantic/LongTextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import SimpleSchema from 'simpl-schema';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import { Reviews } from '../../api/review/Reviews';
import { MenuItems } from '../../api/menu/MenuItems';

/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  rating: {
    label: 'Rating',
    type: Number,
    allowedValues: [1, 2, 3, 4, 5],
    defaultValue: 1,
  },
  description: { label: 'Description', type: String },
});

/** Renders the Page for adding a document. */
class ReviewMenuItem extends React.Component {

  submit(data, fref) {
    const {
      rating, description } = data;
    const owner = Meteor.user().username;
    const menuId = this.props.id;
    const name = MenuItems.findOne({ _id: menuId }).name;
    const vendor = MenuItems.findOne({ _id: menuId }).vendor;
    Reviews.insert({
      name,
      vendor,
      description,
      owner,
      rating,
      menuId,
        },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Review added successfully', 'success');
            fref.reset();
          }
        });
  }


  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    return (
        <div className='peach'>
          <Grid container centered>
            <Grid.Column>
              <Header as="h2" textAlign="center" inverted>Review Menu Item!</Header>
              <AutoForm ref={ref => {
                fRef = ref;
              }} schema={formSchema} onSubmit={data => this.submit(data, fRef)}>
                <Segment>
                  <SelectField className='josefin' name='rating'/>
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

ReviewMenuItem.propTypes = {
  id: PropTypes.string.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  const subscription = Meteor.subscribe('AllMenuItems');
  // Get access to Stuff documents.
  return {
    id: documentId,
    ready: subscription.ready(),
  };
})(ReviewMenuItem);
