const mongoose = require('mongoose');
const { Schema } = mongoose;

const StudentSchema = new Schema({
    name: {
      type: String,
      required: true
    },

    
    mentor: {
        type: String,
        required: true
    },
    
    research_area: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true
    },

    website: {
      type: String
    }
    
  });
  
  const Student = mongoose.model('student', StudentSchema)
  Student.createIndexes()
  module.exports = Student