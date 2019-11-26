import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { MenuItems } from '../../api/menu/MenuItems';
import { Reviews } from '../../api/review/Reviews';

/* eslint-disable no-console */

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.insert(data);
}

/** Initialize the collection if empty. */
if (Stuffs.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}

function addMenu(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  MenuItems.insert(data);
}

/** Initialize the collection if empty. */
if (MenuItems.find().count() === 0) {
  if (Meteor.settings.defaultMenu) {
    console.log('Creating default data.');
    Meteor.settings.defaultMenu.map(data => addMenu(data));
  }
}

function addReviews(data) {
  console.log(`  Adding Review: ${data.name} (${data.owner})`);
  Reviews.insert(data);
}

/** Initialize the collection if empty. */
if (Reviews.find().count() === 0) {
  if (Meteor.settings.defaultReviews) {
    console.log('Creating default reviews.');
    Meteor.settings.defaultReviews.map(data => addReviews(data));
  }
}
