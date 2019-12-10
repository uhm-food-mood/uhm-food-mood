// eslint-disable-next-line no-undef
Meteor.methods({
  // eslint-disable-next-line consistent-return,meteor/audit-argument-checks
  setRoleOnUser(options) {
    try {
      // eslint-disable-next-line no-undef
      Roles.setUserRoles(options.user, [options.role]);
    } catch (exception) {
      return exception;
    }
  },
  // eslint-disable-next-line meteor/audit-argument-checks,consistent-return
  deleteUser(docID) {
    try {
      // eslint-disable-next-line no-undef
      Meteor.users.remove(docID);
    } catch (exception) {
      return exception;
    }
  },
});
