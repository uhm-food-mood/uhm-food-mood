import { Meteor } from 'meteor/meteor';
import { MenuItems } from '../../api/menu/MenuItems';
import { Reviews } from '../../api/review/Reviews';

/* eslint-disable no-console */

const defaultMenu = JSON.parse(Assets.getText('menuitems.json'));

function addMenu(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  MenuItems.insert(data);
}

/** Initialize the collection if empty. */
if (MenuItems.find().count() === 0) {
  if (defaultMenu) {
    console.log('Creating default data.');
    defaultMenu.map(data => addMenu(data));
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
