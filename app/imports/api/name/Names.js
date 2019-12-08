import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Names = new Mongo.Collection('Names');

/** Define a schema to specify the structure of each document in the collection. */
const NamesSchema = new SimpleSchema({
  username: String,
  name: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Names.attachSchema(NamesSchema);

/** Make the collection and schema available to other code. */
export { Names, NamesSchema };
