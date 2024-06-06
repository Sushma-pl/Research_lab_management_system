// routes/api/student.js

const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Load student model
const Student  = require('../../models/Student');

// @route GET api/student/test
// @description tests student route
// @access Public
router.get('/', (req, res) => {
    Student.find()
  .then(student => res.json(student))
  .catch(err => res.status(404).json({ nostudentfound: 'No student found' }));
 });

// create a new student
router.post('/add',[
    body('name').isLength({ min: 5 }),
], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
      res.status(404).json({ errors: errors.array() })
    }
    
    Student.create({
      name: req.body.name,
      mentor: req.body.mentor,
      email: req.body.email,
      research_area: req.body.research_area,
      website: req.body.website
  }).then(student => res.json(student));
  
  // can write a delete-student part also 
});



  module.exports = router;