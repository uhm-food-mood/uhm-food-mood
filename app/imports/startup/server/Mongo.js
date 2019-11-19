import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { MenuItems } from '../../api/menu/MenuItems';

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
