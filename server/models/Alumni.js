const mongoose = require('mongoose');
const { Schema } = mongoose;

const AlumniSchema = new Schema({
    name: {
      type: String,
      required: true
    },

    type_of_alumni: {
      type: String,
      required: true
    },

    mentor: {
      type: String,
      required: true
    },

    thesis: {
      type: String
    },
    graduation_year: {
      type: String
    },
    present_position: {
      type: String
    },
    linkedin: {
      type: String
    },
    gs: {
      type: String
    }
  });
  
  const Alumni = mongoose.model('alumni', AlumniSchema)
  Alumni.createIndexes()
  module.exports = Alumni