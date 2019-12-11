import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Vendors = new Mongo.Collection('Vendors');

/** Define a schema to specify the structure of each document in the collection. */
const VendorsSchema = new SimpleSchema({
  name: String,
  description: String,
  owner: String,
  image: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Vendors.attachSchema(VendorsSchema);

/** Make the collection and schema available to other code. */
export { Vendors, VendorsSchema };
