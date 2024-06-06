const mongoose = require('mongoose');
const { Schema } = mongoose;

const SeminarSchema = new Schema({
    topic: {
      type: String,
      required: true
    },

    organizer: {
      type: String,
      required: true
    },

    type_of_seminar: {
      type: String,
      required: true
    },

    date: {
      type: String, required: true
    }
  });
  
  const Seminar = mongoose.model('seminar', SeminarSchema)
  Seminar.createIndexes()
  module.exports = Seminar