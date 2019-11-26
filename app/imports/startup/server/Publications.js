import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Stuffs } from '../../api/stuff/Stuff';
import { MenuItems } from '../../api/menu/MenuItems';
import { Reviews } from '../../api/review/Reviews';

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Stuff', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Stuffs.find({ owner: username });
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('StuffAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Stuffs.find();
  }
  return this.ready();
});

Meteor.publish('MenuItems', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return MenuItems.find({ owner: username });
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('MenuItemsAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return MenuItems.find();
  }
  return this.ready();
});

Meteor.publish('AllMenuItems', function publish() {
    return MenuItems.find();
});

Meteor.publish('Reviews', function publish() {
  return Reviews.find();
});
