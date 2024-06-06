const mongoose = require('mongoose');
const { Schema } = mongoose;

const VisitorSchema = new Schema({
    name: {
      type: String,
      required: true
    },

    affiliation: {
      type: String,
      required: true
    },

    
    visit_date: {
      type: String
    },

    website: {
      type: String
    }
  });
  
  const Visitor = mongoose.model('visitor', VisitorSchema)
  Visitor.createIndexes()
  module.exports = Visitor