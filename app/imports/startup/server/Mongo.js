import { MenuItems } from '../../api/menu/MenuItems';
import { Names } from '../../api/name/Names';
import { Vendors } from '../../api/vendor/Vendors';

/* eslint-disable no-console */

const defaultMenu = JSON.parse(Assets.getText('menuitems.json'));
const defaultNames = JSON.parse(Assets.getText('names.json'));
const defaultVendors = JSON.parse(Assets.getText('defaultVendors.json'));

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

function addNames(data) {
  console.log(` Adding: name: ${data.name} for ${data.username}`);
  Names.insert(data);
}

if (Names.find().count() === 0) {
  defaultNames.map(data => addNames(data));
}
function addVendors(data) {
  console.log(` Adding: Vendor listing: ${data.name} for ${data.owner}`);
  Vendors.insert(data);
}

if (Vendors.find().count() === 0) {
  defaultVendors.map(data => addVendors(data));
}
