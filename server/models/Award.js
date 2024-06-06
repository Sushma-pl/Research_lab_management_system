const mongoose = require('mongoose');
const { Schema } = mongoose;

const AwardSchema = new Schema({
    name_of_award: {
      type: String,
      required: true
    },

    recipient: {
      type: String,
      required: true
    },

    date: {
      type: String,
      required: true
    },

    description: {
      type: String, required: true
    }
  });
  
  const Award = mongoose.model('award', AwardSchema)
  Award.createIndexes()
  module.exports = Award