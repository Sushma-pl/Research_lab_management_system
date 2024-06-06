const mongoose = require('mongoose');
const { Schema } = mongoose;

const ConferenceSchema = new Schema({
    name: {
      type: String,
      required: true
    },

    abstract_date: {
      type: String,
    },

    submission_date: {
      type: String,
      required: true
    },

    notification_date: {
      type: String
    },
    event_date: {
      type: String, required: true
    },
    location: {
      type: String, required: true
    },
    core_rank: {
      type: String
    },
  });
  
  const Conference = mongoose.model('conference', ConferenceSchema)
  Conference.createIndexes()
  module.exports = Conference