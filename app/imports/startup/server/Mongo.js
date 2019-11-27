import { Meteor } from 'meteor/meteor';
import { MenuItems } from '../../api/menu/MenuItems';
import { Reviews } from '../../api/review/Reviews';

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
