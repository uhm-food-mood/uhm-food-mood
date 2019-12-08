import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { MenuItems } from '../../api/menu/MenuItems';
import { Reviews } from '../../api/review/Reviews';
import { Favorites } from '../../api/favorite/Favorites';

/** This subscription publishes only the documents associated with the logged in user */


Meteor.publish('MenuItems', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return MenuItems.find({ owner: username });
  }
  return this.ready();
});

Meteor.publish('UserFavorites', function publish() {
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
  return MenuItems.find({ master: 'yes' });
});

Meteor.publish('Reviews', function publish() {
  return Reviews.find();
});

Meteor.publish('Favorites', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Favorites.find({ owner: username });
  }
  return this.ready();
});
Meteor.publish('AllFavorites', function publish() {
  return Favorites.find();
});
Meteor.publish('UserReviews', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Reviews.find({ owner: username });
  }
  return this.ready();
});
