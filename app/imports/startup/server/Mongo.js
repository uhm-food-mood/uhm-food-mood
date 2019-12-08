import { MenuItems } from '../../api/menu/MenuItems';

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
