// Open your ./models/genre.js file and create a schema for storing genres (the category of book, e.g. whether it is fiction or non-fiction, romance or military history, etc).
//
// The definition will be very similar to the other models:
//
// The model should have a String SchemaType called name to describe the genre.
// This name should be required and have between 3 and 100 characters.
// Declare a virtual for the genre's URL, named url.
// Export the model.

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Genre = new Schema(
  {
    name: { type: String, required: true, min: 3, max: 100 }
  }
);

// Virtual for bookinstance's URL
Genre
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

//Export model
module.exports = mongoose.model('Genre', Genre);
