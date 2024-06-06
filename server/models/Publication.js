const mongoose = require('mongoose');
const { Schema } = mongoose;

const PublicationSchema = new Schema({
    title: {
      type: String,
      required: true
    },

    authors: {
      type: String,
      required: true
    },

    journal_or_conference: {
      type: String,
      required: true
    },
  });
  
  const Publication = mongoose.model('publication', PublicationSchema)
  Publication.createIndexes()
  module.exports = Publication