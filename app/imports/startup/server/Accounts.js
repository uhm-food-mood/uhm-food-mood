import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

/* eslint-disable no-console */
const defaultAccounts = JSON.parse(Assets.getText('defaultAccounts.json'));

function createUser(email, password, role) {
  console.log(`  Creating user ${email}.`);
  const userID = Accounts.createUser({
    username: email,
    email: email,
    password: password,
  });
  if (role === 'admin') {
    Roles.addUsersToRoles(userID, 'admin');
  }
  if (role === 'vendor') {
    Roles.addUsersToRoles(userID, 'vendor');
  }
}

/** When running app for first time, pass a settings file to set up a default user account. */
if (Meteor.users.find().count() === 0) {
  if (defaultAccounts) {
    console.log('Creating the default user(s)');
    defaultAccounts.map(({ email, password, role }) => createUser(email, password, role));
  } else {
    console.log('Cannot initialize the database!  Please invoke meteor with a settings file.');
  }
}
